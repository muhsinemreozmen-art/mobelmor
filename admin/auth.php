<?php
/**
 * MOBELMOR ADMIN GÜVENLİK VE OTURUM KONTROLÜ
 */

require_once __DIR__ . '/../config/helpers.php';

function checkAdminAuth() {
    if (!isAdminLoggedIn()) {
        header("Location: login.php");
        exit;
    }
}
