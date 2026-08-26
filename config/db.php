<?php
/**
 * MOBELMOR E-TİCARET VERİTABANI BAĞLANTISI (PDO)
 * MySQL & SQLite Otomatik Destekli
 */

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

class Database {
    private static $instance = null;
    private $pdo;

    // MySQL Yapılandırması (Canlı sunucu veya XAMPP için)
    private $db_host = 'localhost';
    private $db_name = 'mobelmor_db';
    private $db_user = 'root';
    private $db_pass = '';
    private $db_charset = 'utf8mb4';

    // SQLite Dosya Yolu (Yerel geliştirme yedeği)
    private $sqlite_file;

    private function __construct() {
        $this->sqlite_file = dirname(__DIR__) . '/database/mobelmor.db';

        // 1. Önce MySQL'e bağlanmayı dene
        try {
            $dsn = "mysql:host={$this->db_host};dbname={$this->db_name};charset={$this->db_charset}";
            $options = [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES   => false,
            ];
            $this->pdo = new PDO($dsn, $this->db_user, $this->db_pass, $options);
        } catch (PDOException $e) {
            // 2. MySQL yoksa yerel SQLite veritabanına bağlan
            if (file_exists($this->sqlite_file)) {
                try {
                    $this->pdo = new PDO("sqlite:" . $this->sqlite_file);
                    $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                    $this->pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
                } catch (PDOException $sqle) {
                    die("Veritabanı bağlantı hatası: " . $sqle->getMessage());
                }
            } else {
                die("Veritabanı bağlantı hatası: " . $e->getMessage());
            }
        }
    }

    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function getConnection() {
        return $this->pdo;
    }
}

// Global kısayol fonksiyonu
function getDB() {
    return Database::getInstance()->getConnection();
}
