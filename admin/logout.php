<?php
require_once __DIR__ . '/../config/helpers.php';
unset($_SESSION['admin_user']);
session_destroy();
header("Location: login.php");
exit;
