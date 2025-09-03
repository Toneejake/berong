#!/usr/bin/env python3
"""
Script to set up PostgreSQL database and user for SafeScape application.
This script assumes PostgreSQL is already installed and running.
"""

import sys
import psycopg2
from psycopg2 import sql

# Database configuration
DB_NAME = 'safescape'
DB_USER = 'safescape_user'
DB_PASSWORD = 'safescape_password'
DB_HOST = 'localhost'
DB_PORT = '5432'

# PostgreSQL superuser credentials (you'll need to provide these)
PG_SUPERUSER = 'postgres'  # Default PostgreSQL superuser
PG_PASSWORD = ''  # You'll need to provide this

def create_database_and_user():
    """Create the database and user for SafeScape."""
    try:
        # Connect to PostgreSQL as superuser
        conn = psycopg2.connect(
            dbname='postgres',  # Connect to default database
            user=PG_SUPERUSER,
            password=PG_PASSWORD,
            host=DB_HOST,
            port=DB_PORT
        )
        conn.autocommit = True
        cursor = conn.cursor()

        # Create database
        cursor.execute(sql.SQL("CREATE DATABASE {}").format(sql.Identifier(DB_NAME)))
        print(f"Database '{DB_NAME}' created successfully.")

        # Create user
        cursor.execute(
            sql.SQL("CREATE USER {} WITH PASSWORD %s").format(sql.Identifier(DB_USER)),
            [DB_PASSWORD]
        )
        print(f"User '{DB_USER}' created successfully.")

        # Grant privileges
        cursor.execute(
            sql.SQL("GRANT ALL PRIVILEGES ON DATABASE {} TO {}").format(
                sql.Identifier(DB_NAME),
                sql.Identifier(DB_USER)
            )
        )
        print(f"Privileges granted to user '{DB_USER}' on database '{DB_NAME}'.")

        cursor.close()
        conn.close()
        return True

    except psycopg2.Error as e:
        print(f"Error: {e}")
        return False

if __name__ == "__main__":
    print("SafeScape PostgreSQL Setup Script")
    print("=" * 35)
    
    # Get PostgreSQL superuser password
    PG_PASSWORD = input(f"Enter password for PostgreSQL superuser '{PG_SUPERUSER}': ")
    
    if not PG_PASSWORD:
        print("Error: Superuser password is required.")
        sys.exit(1)
    
    print("\nSetting up database and user...")
    if create_database_and_user():
        print("\nDatabase setup completed successfully!")
        print("\nNext steps:")
        print("1. Update your Django settings if needed")
        print("2. Run 'python manage.py migrate' to apply migrations")
    else:
        print("\nDatabase setup failed!")
        sys.exit(1)
