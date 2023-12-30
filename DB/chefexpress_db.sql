-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 30-Dez-2023 às 01:06
-- Versão do servidor: 8.0.31
-- versão do PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `chefexpress`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `avaliacoes`
--

DROP TABLE IF EXISTS `avaliacoes`;
CREATE TABLE IF NOT EXISTS `avaliacoes` (
  `idUser` int NOT NULL,
  `idAvaliacao` int NOT NULL AUTO_INCREMENT,
  `estrelas` int NOT NULL,
  `comentarios` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `dataCriacao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idAvaliacao`)
) ENGINE=MyISAM AUTO_INCREMENT=691 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `avaliacoes`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `funcionarios`
--

DROP TABLE IF EXISTS `funcionarios`;
CREATE TABLE IF NOT EXISTS `funcionarios` (
  `idFuncionario` int NOT NULL AUTO_INCREMENT,
  `tipoFuncionario` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `valor` int NOT NULL,
  `lucro` int DEFAULT NULL,
  `tempoPreparo` int NOT NULL,
  PRIMARY KEY (`idFuncionario`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `funcionarios`
--

INSERT INTO `funcionarios` (`idFuncionario`, `tipoFuncionario`, `valor`, `lucro`, `tempoPreparo`) VALUES
(1, 'Chef 1', 70, 5, 0),
(2, 'Chef 2', 130, 10, 0),
(3, 'Chef 3', 180, 20, 0),
(4, 'Chef 4', 300, 40, 0),
(5, 'Ajudante 1', 30, 0, 15),
(6, 'Ajudante 2 ', 100, 0, 10),
(7, 'Ajudante 3', 150, 0, 5),
(8, 'Ajudante 4', 270, 0, 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `trocas`
--

DROP TABLE IF EXISTS `trocas`;
CREATE TABLE IF NOT EXISTS `trocas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idUser` int NOT NULL,
  `idPratos` int NOT NULL,
  `qtdPratos` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=103 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `trocas`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `dinheiro` int NOT NULL DEFAULT '100',
  `avaliacao` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `users`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `users_ajudantes`
--

DROP TABLE IF EXISTS `users_ajudantes`;
CREATE TABLE IF NOT EXISTS `users_ajudantes` (
  `idUser` int NOT NULL,
  `idAjudante` int NOT NULL,
  `ativo` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `users_ajudantes`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `users_chefs`
--

DROP TABLE IF EXISTS `users_chefs`;
CREATE TABLE IF NOT EXISTS `users_chefs` (
  `idUser` int NOT NULL,
  `idChef` int NOT NULL,
  `ativo` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `users_chefs`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `users_pratos`
--

DROP TABLE IF EXISTS `users_pratos`;
CREATE TABLE IF NOT EXISTS `users_pratos` (
  `idUser` int NOT NULL,
  `idPratos` int NOT NULL,
  `qtdPrato` int NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `users_pratos`
--
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
