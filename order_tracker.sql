-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 10 Lis 2023, 21:51
-- Wersja serwera: 10.4.27-MariaDB
-- Wersja PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `order_tracker`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `elements`
--

CREATE TABLE `elements` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `name` varchar(40) NOT NULL,
  `amount` tinyint(3) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `materials`
--

CREATE TABLE `materials` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `name` varchar(30) NOT NULL,
  `amount` tinyint(3) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `orders`
--

CREATE TABLE `orders` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `name` varchar(20) NOT NULL,
  `status` varchar(15) NOT NULL,
  `date` date NOT NULL,
  `comment` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `orders_elements`
--

CREATE TABLE `orders_elements` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `order_id` varchar(36) NOT NULL DEFAULT uuid(),
  `element_id` varchar(36) NOT NULL DEFAULT uuid(),
  `amount` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `orders_materials`
--

CREATE TABLE `orders_materials` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `order_id` varchar(36) NOT NULL DEFAULT uuid(),
  `material_id` varchar(36) NOT NULL DEFAULT uuid(),
  `amount` tinyint(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `name` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `elements`
--
ALTER TABLE `elements`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `materials`
--
ALTER TABLE `materials`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `orders_elements`
--
ALTER TABLE `orders_elements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `element_id` (`element_id`);

--
-- Indeksy dla tabeli `orders_materials`
--
ALTER TABLE `orders_materials`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `material_id` (`material_id`);

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `orders_elements`
--
ALTER TABLE `orders_elements`
  ADD CONSTRAINT `FK_orders_elements_elements` FOREIGN KEY (`element_id`) REFERENCES `elements` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_elements_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `orders_materials`
--
ALTER TABLE `orders_materials`
  ADD CONSTRAINT `FK_orders_materials_materials` FOREIGN KEY (`material_id`) REFERENCES `materials` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_orders_materials_orders` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
