# Hii Django App on Render

## Local Development

1. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

2. Copy .env.example to .env and configure:
   ```
   cp .env.example .env
   ```
   Generate SECRET_KEY:
   ```
   python -c \"from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())\" 
   ```
   Set DEBUG=True for dev, DATABASE_URL=sqlite:///./db.sqlite3 if keeping SQLite.

3. Migrate DB:
   ```
   python manage.py makemigrations
   python manage.py migrate
   ```

4. Collect static files:
   ```
   python manage.py collectstatic --noinput
   ```

5. Run server:
   ```
   python manage.py runserver
   ```

## Production on Render

1. Push code to GitHub repo.

2. Create Render account, new Web Service, connect repo.

3. Add PostgreSQL database in Render dashboard.

4. In service settings:
   - Set env vars:
     | Key | Value |
     |-----|-------|
     | PYTHON_VERSION | 3.12.7 |
     | SECRET_KEY | (generate new) |
     | DEBUG | False |
     | ALLOWED_HOSTS | *.onrender.com |
   - Link DB: add DATABASE_URL from DB instance.

5. Build settings auto-detected (runtime.txt), or manual:
   - Build: `pip install -r requirements.txt && python manage.py collectstatic --noinput`
   - Start: `gunicorn hii.wsgi:application`

6. Deploy! Visit your-render-app.onrender.com

**Note:** render.yaml enables blueprint deploy for auto DB+service.

For custom domain, add to ALLOWED_HOSTS.

