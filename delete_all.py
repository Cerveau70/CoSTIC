#!/usr/bin/env python3
from ftplib import FTP
import os
import sys
from pathlib import Path

# Configuration FTP
FTP_SERVER = "ftp.esatic.ci"
FTP_USER = "admuser@costic.esatic.ci"
FTP_PASS = "AdmCostic2@26"

# Chemin local du dossier dist
DIST_PATH = Path(__file__).parent / "dist"

# Contenu du fichier .htaccess
HTACCESS_CONTENT = """<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Ne pas rediriger les fichiers existants
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Rediriger toutes les routes vers index.html
  RewriteRule ^ index.html [QSA,L]
</IfModule>

# Désactiver le listing des répertoires
Options -Indexes

# Activer la compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Cache pour les assets statiques
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
</IfModule>
"""

def create_htaccess():
    """Crée le fichier .htaccess dans le dossier dist"""
    htaccess_path = DIST_PATH / ".htaccess"
    try:
        with open(htaccess_path, 'w', encoding='utf-8') as f:
            f.write(HTACCESS_CONTENT)
        print("✅ Fichier .htaccess créé")
        return True
    except Exception as e:
        print(f"❌ Erreur lors de la création de .htaccess: {e}")
        return False

def upload_file(ftp, local_path, remote_path):
    """Upload un fichier"""
    try:
        with open(local_path, 'rb') as f:
            ftp.storbinary(f'STOR {remote_path}', f)
        print(f"✅ {remote_path}")
        return True
    except Exception as e:
        print(f"❌ Erreur {remote_path}: {e}")
        return False

def upload_directory(ftp, local_dir, remote_dir=""):
    """Upload récursivement un dossier"""
    try:
        if remote_dir:
            try:
                ftp.mkd(remote_dir)
            except:
                pass
        
        if remote_dir:
            ftp.cwd(remote_dir)
        
        items = list(local_dir.iterdir())
        
        for item in items:
            if item.is_file():
                upload_file(ftp, item, item.name)
        
        for item in items:
            if item.is_dir():
                upload_directory(ftp, item, item.name)
        
        if remote_dir:
            ftp.cwd('..')
        
        return True
    except Exception as e:
        print(f"❌ Erreur dossier {local_dir}: {e}")
        return False

def main():
    # Vérifier que le dossier dist existe
    if not DIST_PATH.exists():
        print(f"❌ Le dossier dist n'existe pas: {DIST_PATH}")
        print("💡 Exécutez d'abord: npm run build")
        sys.exit(1)
    
    # Créer le fichier .htaccess
    print("📝 Création du fichier .htaccess...")
    create_htaccess()
    
    # Connexion FTP
    try:
        print("\n🔌 Connexion au serveur FTP...")
        ftp = FTP(FTP_SERVER)
        ftp.login(FTP_USER, FTP_PASS)
        print("✅ Connecté")
        
        ftp.cwd('/')
        print("🚀 Déploiement...\n")
        
        items = list(DIST_PATH.iterdir())
        
        # Upload les fichiers (y compris .htaccess)
        for item in items:
            if item.is_file():
                upload_file(ftp, item, item.name)
        
        # Upload les dossiers
        for item in items:
            if item.is_dir():
                upload_directory(ftp, item, item.name)
        
        ftp.quit()
        print("\n✅ Déploiement terminé !")
        print("🌐 https://costic.esatic.ci/")
        print("🔐 https://costic.esatic.ci/admin")
        
    except Exception as e:
        print(f"❌ Erreur: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()