def sql_user():
    return """
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        avatar_url VARCHAR(255),
        role VARCHAR(20) DEFAULT 'listener',
        subscription_type VARCHAR(20) DEFAULT 'free',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """
# таблица пользователей для регистрации и логина
# UNIQUE не может быть два одинаковых username и email
# role это слушатель или artist исполнитель
# subscription_type это либо free либо premium подписка


def sql_artists():
    return """
    CREATE TABLE IF NOT EXISTS artists (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        bio TEXT,
        avatar_url VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """
# таблица исполнителей певцы, группы и прочие


def sql_albums():
    return """
    CREATE TABLE IF NOT EXISTS albums (
        id SERIAL PRIMARY KEY,
        title VARCHAR(200) NOT NULL,
        artist_id INTEGER NOT NULL REFERENCES artists(id) ON DELETE CASCADE,
        cover_url VARCHAR(255),
        release_date DATE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """
# таблица альбомов привязана к исполнителю через artist_id
# ON DELETE CASCADE означает если удалить исполнителя то удалятся все его альбомы


def sql_tracks():
    return """
    CREATE TABLE IF NOT EXISTS tracks (
        id SERIAL PRIMARY KEY,
        title VARCHAR(200) NOT NULL,
        artist_id INTEGER NOT NULL REFERENCES artists(id) ON DELETE CASCADE,
        album_id INTEGER REFERENCES albums(id) ON DELETE SET NULL,
        duration INTEGER NOT NULL,
        genre VARCHAR(50),
        file_url VARCHAR(255) NOT NULL,
        plays_count INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """
# таблица треков песни
# duration это длина песни в секундах
# file_url это ссылка на mp3 файл
# plays_count считает сколько раз прослушана песня


def sql_playlists():
    return """
    CREATE TABLE IF NOT EXISTS playlists (
        id SERIAL PRIMARY KEY,
        title VARCHAR(200) NOT NULL,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        description TEXT,
        is_public BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """
# таблица плейлистов которые создают пользователи
# is_public это видна ли плейлист всем или только автору


def sql_playlist_tracks():
    return """
    CREATE TABLE IF NOT EXISTS playlist_tracks (
        id SERIAL PRIMARY KEY,
        playlist_id INTEGER NOT NULL REFERENCES playlists(id) ON DELETE CASCADE,
        track_id INTEGER NOT NULL REFERENCES tracks(id) ON DELETE CASCADE,
        added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """
# таблица связи между плейлистами и треками
# так как один трек может быть в разных плейлистах нужна отдельная таблица


def sql_favorites():
    return """
    CREATE TABLE IF NOT EXISTS favorites (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        track_id INTEGER NOT NULL REFERENCES tracks(id) ON DELETE CASCADE,
        added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(user_id, track_id)
    );
    """
# таблица лайков когда пользователь ставит лайк на трек
# UNIQUE user_id, track_id означает что пользователь может лайкнуть трек только один раз


def sql_history():
    return """
    CREATE TABLE IF NOT EXISTS history (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        track_id INTEGER NOT NULL REFERENCES tracks(id) ON DELETE CASCADE,
        played_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        duration_listened INTEGER
    );
    """
# таблица истории прослушивания сохраняет когда какой трек слушал пользователь
# duration_listened это сколько секунд прослушал трек до конца
