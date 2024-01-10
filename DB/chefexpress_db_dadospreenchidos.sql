-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 10-Jan-2024 às 22:11
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
) ENGINE=MyISAM AUTO_INCREMENT=724 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `avaliacoes`
--

INSERT INTO `avaliacoes` (`idUser`, `idAvaliacao`, `estrelas`, `comentarios`, `dataCriacao`) VALUES
(59, 46, 2, 'Pratos aquém em sabor, atendimento ponto positivo. Equipe atenciosa e prestativa.', '2023-11-21 00:06:30'),
(59, 44, 2, 'Culinária não esta à altura, mas a equipe fez o possível para garantir experiência positiva.', '2023-11-21 00:06:20'),
(59, 45, 2, 'Comida abaixo das expectativas, atendimento ponto forte.', '2023-11-21 00:06:24'),
(59, 43, 2, 'Pratos não atenderam em sabor, atendimento notavelmente bom. Equipe dedicada e receptiva.', '2023-11-21 00:06:14'),
(59, 41, 2, 'Comida abaixo das expectativas, atendimento ponto forte.', '2023-11-21 00:06:09'),
(59, 42, 2, 'Comida abaixo das expectativas, atendimento excepcional.', '2023-11-21 00:06:10'),
(59, 103, 2, 'Gastronomia decepcionou, atendimento bastante elogiável.', '2023-11-21 20:48:25'),
(59, 104, 2, 'Experiência não positiva, destaque para atendimento, demonstrando profissionalismo e cortesia.', '2023-11-21 20:48:27'),
(59, 105, 2, 'Comida abaixo das expectativas, atendimento ponto forte.', '2023-11-21 20:48:33'),
(59, 106, 2, 'Gastronomia decepcionou, atendimento bastante elogiável.', '2023-11-21 20:48:39'),
(59, 107, 0, 'Comida abaixo do esperado em sabor, atendimento desatento. Necessita melhorias para se destacar.', '2023-11-21 20:48:50'),
(59, 108, 2, 'Pratos aquém em sabor, atendimento ponto positivo. Equipe atenciosa e prestativa.', '2023-11-21 20:48:55'),
(59, 109, 0, 'Comida insatisfatória, atendimento pouco acolhedor. ', '2023-11-21 20:49:03'),
(59, 110, 5, 'Experiência gastronômica incrível! Comida deliciosa, atendimento simpático e eficiente.', '2023-11-21 20:49:28'),
(59, 111, 5, 'Encantado com a experiência! Comida saborosa, atendimento amigável e serviço surpreendente.', '2023-11-21 20:49:39'),
(59, 112, 5, 'Prazer em jantar aqui! Comida divina, atendimento com sorrisos calorosos e rapidez no atendimento.', '2023-11-21 20:49:44'),
(59, 113, 5, 'Ótimo restaurante! Comida divina, atendimento cordial e serviço ágil.', '2023-11-21 20:49:49'),
(59, 114, 5, 'Refeição explosão de sabores! Atendimento atencioso, experiência memorável.', '2023-11-21 20:49:55'),
(59, 115, 5, 'Adorei cada momento! Comida obra-prima, atendimento cortês e rapidez na refeição. Recomendo.', '2023-11-21 20:49:59'),
(59, 116, 4, 'Pratos deliciosos, atendimento um pouco desatento. Espero melhorias para uma experiência completa.', '2023-11-21 20:50:08'),
(85, 690, 2, 'Pratos mais ou menos, atendimento é ponto positivo.', '2023-12-29 22:44:12'),
(85, 689, 0, 'Comida abaixo do esperado em sabor, atendimento desatento.', '2023-12-29 22:43:57'),
(85, 688, 0, 'Comida insatisfatória, atendimento pouco acolhedor. ', '2023-12-29 22:43:53'),
(85, 686, 0, 'Comida pouco apetitosa e atendimento desinteressado.', '2023-12-29 22:40:15'),
(85, 687, 0, 'Comida abaixo do esperado em sabor, atendimento desatento.', '2023-12-29 22:40:17'),
(85, 685, 0, 'Pratos não atenderam em sabor, atendimento ruim.', '2023-12-29 22:40:01'),
(85, 684, 0, 'Comida abaixo do esperado em sabor, atendimento desatento.', '2023-12-29 22:39:56'),
(85, 683, 2, 'Culinária ruim, mas a equipe fez o possível para garantir experiência.', '2023-12-29 22:39:52'),
(68, 682, 2, 'Pratos mais ou menos, atendimento é ponto positivo.', '2023-12-29 22:36:25'),
(68, 681, 2, 'Experiência negativa, destaque para atendimento.', '2023-12-29 22:36:14'),
(68, 680, 2, 'Sabores negativos, elogio ao atendimento, amigável e atencioso.', '2023-12-29 22:36:09'),
(68, 679, 2, 'Comida abaixo do esperado, mas a equipe é dedicada e receptiva.', '2023-12-29 22:36:01'),
(68, 678, 2, 'Gastronomia decepcionou, mas o atendimento bastante elogiável.', '2023-12-29 22:35:47'),
(68, 677, 0, 'Comida ruim, atendimento insatisfatório.', '2023-12-29 22:35:29'),
(68, 676, 2, 'Pratos não atenderam no sabor, atendimento notavelmente bom.', '2023-12-29 22:35:27'),
(68, 675, 2, 'Comida abaixo das expectativas, atendimento excepcional.', '2023-12-29 22:35:19'),
(68, 673, 0, 'Pratos não atenderam em sabor, atendimento ruim.', '2023-12-29 22:35:05'),
(68, 674, 0, 'Comida insatisfatória, atendimento pouco acolhedor. ', '2023-12-29 22:35:16'),
(68, 672, 0, 'Pratos não atenderam em sabor, atendimento ruim.', '2023-12-29 22:34:23'),
(68, 671, 0, 'Comida ruim, atendimento pouco acolhedor. Experiência sem prazer gastronômico.', '2023-12-29 22:34:20'),
(68, 669, 0, 'Qualidade da comida e atendimento muito abaixo.', '2023-12-29 22:34:07'),
(68, 670, 0, 'Comida ruim, atendimento insatisfatório.', '2023-12-29 22:34:12'),
(68, 668, 0, 'Pratos não atenderam em sabor, atendimento ruim.', '2023-12-29 22:34:03'),
(68, 667, 0, 'Comida e atendimento abaixo do esperado.', '2023-12-29 22:33:57'),
(68, 666, 0, 'Comida e atendimento abaixo do esperado.', '2023-12-29 15:29:58'),
(68, 665, 2, 'Gastronomia decepcionou, mas o atendimento bastante elogiável.', '2023-12-28 16:42:07'),
(68, 664, 2, 'Culinária ruim, mas a equipe fez o possível para garantir experiência.', '2023-12-28 16:42:01'),
(68, 663, 0, 'Culinária questionável, atendimento deixou a desejar. Experiência negativa.', '2023-12-28 16:41:58'),
(68, 661, 0, 'Pratos não atenderam em sabor, atendimento ruim.', '2023-12-28 16:41:47'),
(68, 662, 0, 'Comida ruim, atendimento pouco acolhedor. Experiência sem prazer gastronômico.', '2023-12-28 16:41:52'),
(68, 660, 0, 'Comida ruim, atendimento pouco acolhedor. Experiência sem prazer gastronômico.', '2023-12-28 16:41:41'),
(68, 659, 0, 'Culinária questionável, atendimento deixou a desejar. Experiência negativa.', '2023-12-28 16:41:36'),
(68, 658, 0, 'Qualidade da comida e atendimento muito abaixo.', '2023-12-28 16:41:34'),
(68, 657, 2, 'Pratos não atenderam no sabor, atendimento notavelmente bom.', '2023-12-28 16:41:31'),
(68, 656, 2, 'Comida abaixo das expectativas, atendimento excepcional.', '2023-12-20 23:22:55'),
(68, 655, 2, 'Pratos não atenderam no sabor, atendimento notavelmente bom.', '2023-12-20 23:22:50'),
(68, 653, 0, 'Qualidade da comida e atendimento muito abaixo.', '2023-12-20 23:22:40'),
(68, 654, 0, 'Culinária questionável, atendimento deixou a desejar. Experiência negativa.', '2023-12-20 23:22:45'),
(68, 652, 0, 'Culinária questionável, atendimento deixou a desejar. Experiência negativa.', '2023-12-20 23:22:36'),
(84, 651, 5, 'Experiência cinco estrelas! Comida e atendimento perfeito.', '2023-12-20 23:20:10'),
(84, 650, 5, 'Encantado com a experiência! Comida saborosa, serviço surpreendente.', '2023-12-20 23:20:07'),
(84, 649, 0, 'Culinária questionável, atendimento deixou a desejar. Experiência negativa.', '2023-12-20 23:15:30'),
(84, 647, 0, 'Comida e atendimento abaixo do esperado.', '2023-12-20 23:14:54'),
(84, 648, 0, 'Culinária questionável, atendimento deixou a desejar. Experiência negativa.', '2023-12-20 23:15:00'),
(68, 646, 2, 'Comida abaixo do esperado, mas a equipe é dedicada e receptiva.', '2023-12-20 23:14:39'),
(68, 645, 2, 'Gastronomia decepcionou, mas o atendimento bastante elogiável.', '2023-12-20 23:14:29'),
(84, 644, 0, 'Comida abaixo do esperado em sabor, atendimento desatento.', '2023-12-20 23:12:15'),
(84, 643, 0, 'Culinária questionável, atendimento deixou a desejar. Experiência negativa.', '2023-12-20 23:12:07'),
(84, 642, 2, 'Atendimento eficiente, mas a comida ficou a desejar.', '2023-12-20 23:12:00'),
(68, 641, 0, 'Comida ruim, atendimento insatisfatório.', '2023-12-20 23:09:08'),
(68, 640, 2, 'Sabores negativos, elogio ao atendimento, amigável e atencioso.', '2023-12-20 22:51:23'),
(68, 639, 2, 'Pratos mais ou menos, atendimento é ponto positivo.', '2023-12-20 22:51:23'),
(68, 638, 2, 'Comida abaixo do esperado, mas a equipe é dedicada e receptiva.', '2023-12-20 22:51:23'),
(68, 637, 0, 'Comida insatisfatória, atendimento pouco acolhedor. ', '2023-12-19 18:55:48'),
(68, 636, 0, 'Comida abaixo do esperado em sabor, atendimento desatento.', '2023-12-19 18:55:43'),
(68, 634, 0, 'Pratos não atenderam em sabor, atendimento ruim.', '2023-12-19 18:55:38'),
(68, 635, 0, 'Comida e atendimento abaixo do esperado.', '2023-12-19 18:55:39'),
(68, 633, 0, 'Comida ruim, atendimento pouco acolhedor. Experiência sem prazer gastronômico.', '2023-12-19 18:55:32'),
(68, 632, 2, 'Comida abaixo das expectativas, atendimento excepcional.', '2023-12-19 18:55:25'),
(68, 631, 0, 'Pratos não atenderam em sabor, atendimento ruim.', '2023-12-19 18:55:23'),
(68, 630, 0, 'Comida ruim, atendimento pouco acolhedor. Experiência sem prazer gastronômico.', '2023-12-19 18:55:21'),
(68, 629, 0, 'Culinária questionável, atendimento deixou a desejar. Experiência negativa.', '2023-12-15 22:05:00'),
(68, 628, 0, 'Comida e atendimento abaixo do esperado.', '2023-12-15 22:04:49'),
(68, 626, 0, 'Comida ruim, atendimento insatisfatório.', '2023-12-15 22:04:30'),
(68, 627, 0, 'Comida pouco apetitosa e atendimento desinteressado.', '2023-12-15 22:04:42'),
(68, 625, 2, 'Pratos não atenderam no sabor, atendimento notavelmente bom.', '2023-12-15 22:04:26'),
(58, 624, 5, 'Refeição saborosa! Atendimento atencioso, experiência memorável.', '2023-12-15 21:57:43'),
(58, 623, 5, 'Jantar perfeito! Comida excepcional, atendimento amigável e rápido.', '2023-12-15 13:30:55'),
(58, 622, 5, 'Jantar perfeito! Comida excepcional, atendimento amigável e rápido.', '2023-12-15 13:30:54'),
(68, 621, 0, 'Comida pouco apetitosa e atendimento desinteressado.', '2023-12-10 22:42:25'),
(68, 619, 0, 'Comida e atendimento abaixo do esperado.', '2023-12-10 22:42:21'),
(68, 620, 0, 'Comida pouco apetitosa e atendimento desinteressado.', '2023-12-10 22:42:23'),
(68, 618, 0, 'Comida ruim, atendimento pouco acolhedor. Experiência sem prazer gastronômico.', '2023-12-10 22:42:17'),
(68, 617, 0, 'Comida insatisfatória, atendimento pouco acolhedor. ', '2023-12-10 22:42:13'),
(68, 616, 0, 'Pratos não atenderam em sabor, atendimento ruim.', '2023-12-10 22:42:08'),
(68, 615, 0, 'Comida insatisfatória, atendimento pouco acolhedor. ', '2023-12-10 22:42:03'),
(68, 614, 0, 'Comida ruim, atendimento insatisfatório.', '2023-12-10 22:42:01'),
(68, 613, 0, 'Qualidade da comida e atendimento muito abaixo.', '2023-12-10 19:00:46'),
(68, 612, 0, 'Comida pouco apetitosa e atendimento desinteressado.', '2023-12-10 19:00:39'),
(68, 611, 0, 'Culinária questionável, atendimento deixou a desejar. Experiência negativa.', '2023-12-10 19:00:22'),
(68, 610, 0, 'Experiência negativa, não recomendo.', '2023-12-10 19:00:10'),
(68, 609, 2, 'Comida abaixo das expectativas, atendimento ponto forte.', '2023-12-10 16:42:27'),
(68, 608, 2, 'Gastronomia decepcionou, mas o atendimento bastante elogiável.', '2023-12-10 16:42:19'),
(68, 607, 2, 'Sabores negativos, elogio ao atendimento, amigável e atencioso.', '2023-12-10 16:42:14'),
(68, 606, 2, 'Comida abaixo das expectativas, atendimento excepcional.', '2023-12-10 16:42:06'),
(68, 605, 2, 'Culinária ruim, mas a equipe fez o possível para garantir experiência.', '2023-12-10 16:42:00'),
(68, 604, 2, 'Experiência negativa, destaque para atendimento.', '2023-12-10 16:41:56'),
(68, 603, 0, 'Comida e atendimento abaixo do esperado.', '2023-12-10 16:09:06'),
(68, 602, 0, 'Culinária questionável, atendimento deixou a desejar. Experiência negativa.', '2023-12-10 16:09:00'),
(68, 601, 0, 'Culinária questionável, atendimento deixou a desejar. Experiência negativa.', '2023-12-10 16:08:56'),
(68, 599, 0, 'Comida ruim, atendimento insatisfatório.', '2023-12-10 16:08:46'),
(68, 600, 0, 'Comida insatisfatória, atendimento pouco acolhedor. ', '2023-12-10 16:08:53'),
(68, 598, 2, 'Experiência negativa, destaque para atendimento.', '2023-12-10 16:08:40'),
(68, 597, 2, 'Comida abaixo das expectativas, atendimento ponto forte.', '2023-12-10 16:08:34'),
(68, 596, 2, 'Comida abaixo das expectativas, atendimento excepcional.', '2023-12-10 16:08:29'),
(68, 595, 0, 'Qualidade da comida e atendimento muito abaixo.', '2023-12-10 16:03:56'),
(68, 594, 0, 'Comida insatisfatória, atendimento pouco acolhedor. ', '2023-12-10 15:55:20'),
(68, 593, 2, 'Comida abaixo das expectativas, atendimento ponto forte.', '2023-12-10 15:45:03'),
(68, 592, 2, 'Comida abaixo das expectativas, atendimento ponto forte.', '2023-12-10 15:44:54'),
(68, 591, 0, 'Comida insatisfatória, atendimento pouco acolhedor. ', '2023-12-10 15:44:46'),
(68, 590, 2, 'Experiência negativa, destaque para atendimento.', '2023-12-10 15:44:17'),
(68, 589, 2, 'Pratos mais ou menos, atendimento é ponto positivo.', '2023-12-10 15:44:13'),
(68, 588, 0, 'Qualidade da comida e atendimento muito abaixo.', '2023-12-10 15:30:06'),
(68, 587, 0, 'Comida abaixo do esperado em sabor, atendimento desatento.', '2023-12-10 15:29:59'),
(68, 586, 0, 'Pratos não atenderam em sabor, atendimento ruim.', '2023-12-10 15:29:52'),
(68, 585, 0, 'Qualidade da comida e atendimento muito abaixo.', '2023-12-10 15:29:47'),
(58, 584, 5, 'Experiência cinco estrelas! Comida e atendimento perfeito.', '2023-12-10 15:24:11'),
(68, 583, 2, 'Pratos não atenderam no sabor, atendimento notavelmente bom.', '2023-12-10 15:09:16'),
(68, 582, 2, 'Atendimento eficiente, mas a comida ficou a desejar.', '2023-12-10 15:09:13'),
(58, 581, 5, 'Prazer em jantar aqui! Comida divina, atendimento calorosos.', '2023-12-10 14:49:13'),
(58, 580, 5, 'Refeição saborosa! Atendimento atencioso, experiência memorável.', '2023-12-10 14:49:06'),
(68, 579, 0, 'Comida ruim, atendimento pouco acolhedor. Experiência sem prazer gastronômico.', '2023-12-10 14:36:33'),
(68, 577, 0, 'Comida insatisfatória, atendimento pouco acolhedor. ', '2023-12-10 14:36:22'),
(68, 578, 0, 'Qualidade da comida e atendimento muito abaixo.', '2023-12-10 14:36:27'),
(68, 575, 2, 'Experiência negativa, destaque para atendimento.', '2023-12-10 14:35:53'),
(68, 576, 0, 'Comida ruim, atendimento pouco acolhedor. Experiência sem prazer gastronômico.', '2023-12-10 14:36:01'),
(68, 574, 2, 'Pratos mais ou menos, atendimento é ponto positivo.', '2023-12-10 14:35:46'),
(58, 573, 5, 'Prazer em jantar aqui! Comida divina, atendimento calorosos.', '2023-12-10 14:33:53'),
(68, 572, 0, 'Culinária questionável, atendimento deixou a desejar. Experiência negativa.', '2023-12-10 14:28:58'),
(68, 571, 2, 'Sabores negativos, elogio ao atendimento, amigável e atencioso.', '2023-12-10 14:28:51'),
(68, 570, 2, 'Comida abaixo das expectativas, atendimento ponto forte.', '2023-12-10 14:28:48'),
(58, 569, 5, 'Ótimo restaurante! Comida divina, atendimento cordial e ágil.', '2023-12-10 14:25:29'),
(58, 568, 5, 'Experiência cinco estrelas! Comida e atendimento perfeito.', '2023-12-10 14:25:26'),
(58, 567, 5, 'Refeição saborosa! Atendimento atencioso, experiência memorável.', '2023-12-10 14:19:23'),
(58, 566, 5, 'Simplesmente maravilhoso! Comida deliciosa, atendimento atencioso.', '2023-12-10 14:13:25'),
(58, 565, 5, 'Experiência cinco estrelas! Comida e atendimento perfeito.', '2023-12-10 14:11:43'),
(58, 564, 5, 'Experiência excelente! Comida deliciosa, atendimento impecável.', '2023-12-10 14:06:59'),
(58, 563, 5, 'Adorei cada momento! Recomendo.', '2023-12-10 14:06:52'),
(58, 561, 5, 'Adorei cada momento! Recomendo.', '2023-12-10 14:01:26'),
(58, 562, 5, 'Adorei cada momento! Recomendo.', '2023-12-10 14:06:47'),
(58, 560, 5, 'Refeição saborosa! Atendimento atencioso, experiência memorável.', '2023-12-10 14:01:22'),
(58, 559, 4, 'Pratos deliciosos, atendimento um pouco desatento.', '2023-12-10 13:55:11'),
(58, 558, 4, 'Pratos incríveis, mas atendimento deixou a desejar.', '2023-12-10 13:55:08'),
(58, 556, 4, 'Cozinha elogiável, atendimento é ponto fraco.', '2023-12-10 01:17:03'),
(58, 557, 4, 'Cozinha elogiável, atendimento é ponto fraco.', '2023-12-10 01:17:10'),
(58, 555, 4, 'Comida muito saborosa, atendimento lento.', '2023-12-10 01:17:00'),
(58, 554, 4, 'Comida boa, atendimento ruim;', '2023-12-10 01:10:14'),
(58, 553, 4, 'Pratos saborosos, mas o atendimento precisa melhorar.', '2023-12-10 01:10:08'),
(58, 552, 4, 'Pratos incríveis, mas atendimento deixou a desejar.', '2023-12-10 01:10:05'),
(58, 551, 4, 'Comida muito saborosa, atendimento lento.', '2023-12-10 00:50:19'),
(58, 550, 4, 'Comida deliciosa, atendimento razoável.', '2023-12-10 00:50:17'),
(58, 549, 4, 'Sabores surpreendentes, mas atendimento desatento. ', '2023-12-10 00:50:12'),
(58, 548, 4, 'Comida deliciosa, atendimento razoável.', '2023-12-10 00:50:01'),
(58, 546, 0, 'Comida insatisfatória, atendimento pouco acolhedor. ', '2023-12-10 00:17:02'),
(58, 547, 4, 'Comida deliciosa, atendimento razoável.', '2023-12-10 00:50:00'),
(58, 545, 0, 'Comida ruim, atendimento pouco acolhedor. Experiência sem prazer gastronômico.', '2023-12-10 00:16:56'),
(58, 544, 0, 'Qualidade da comida e atendimento muito abaixo.', '2023-12-10 00:16:36'),
(58, 543, 0, 'Comida pouco apetitosa e atendimento desinteressado.', '2023-12-10 00:16:29'),
(58, 542, 0, 'Culinária questionável, atendimento deixou a desejar. Experiência negativa.', '2023-12-10 00:16:23'),
(58, 540, 0, 'Experiência negativa, não recomendo.', '2023-12-10 00:10:20'),
(58, 541, 0, 'Comida e atendimento abaixo do esperado.', '2023-12-10 00:10:25'),
(58, 539, 0, 'Comida abaixo do esperado em sabor, atendimento desatento. Necessita melhorias para se destacar.', '2023-12-10 00:01:29'),
(58, 538, 0, 'Culinária questionável, atendimento deixou a desejar. Experiência com impressão negativa.', '2023-12-10 00:01:18'),
(58, 537, 0, 'Culinária questionável, atendimento deixou a desejar. Experiência com impressão negativa.', '2023-12-10 00:01:14'),
(58, 535, 0, 'Comida insatisfatória, atendimento pouco acolhedor. ', '2023-12-10 00:00:52'),
(58, 536, 0, 'Comida insatisfatória, atendimento pouco acolhedor. ', '2023-12-10 00:00:59'),
(58, 534, 0, 'Comida abaixo do esperado em sabor, atendimento desatento. Necessita melhorias para se destacar.', '2023-12-10 00:00:48'),
(58, 533, 4, 'Pratos incríveis, mas atendimento deixou a desejar.', '2023-12-09 23:50:44'),
(58, 532, 4, 'Cozinha elogiável, atendimento é ponto fraco.', '2023-12-09 23:50:40'),
(58, 531, 4, 'Gostei da qualidade da comida, atendimento mediano.', '2023-12-09 23:50:27'),
(58, 530, 4, 'Pratos deliciosos, atendimento um pouco desatento.', '2023-12-09 23:50:11'),
(58, 528, 5, 'Adorei cada momento! Recomendo.', '2023-12-09 23:49:53'),
(58, 529, 5, 'Ótimo restaurante! Comida divina, atendimento cordial e ágil.', '2023-12-09 23:49:55'),
(58, 527, 5, 'Ótimo restaurante! Comida divina, atendimento cordial e ágil.', '2023-12-09 23:49:47'),
(58, 526, 5, 'Refeição saborosa! Atendimento atencioso, experiência memorável.', '2023-12-09 23:48:59'),
(58, 525, 5, 'Ótimo restaurante! Comida divina, atendimento cordial e ágil.', '2023-12-09 23:48:40'),
(58, 524, 5, 'Jantar perfeito! Comida excepcional, atendimento amigável e rápido.', '2023-12-09 23:46:58'),
(58, 523, 5, 'Experiência excelente! Comida deliciosa, atendimento impecável.', '2023-12-09 23:46:53'),
(58, 522, 5, 'Refeição saborosa! Atendimento atencioso, experiência memorável.', '2023-12-09 23:46:48'),
(58, 521, 5, 'Adorei cada momento! Recomendo.', '2023-12-09 23:40:43'),
(58, 520, 4, 'Pratos saborosos, mas o atendimento precisa melhorar.', '2023-12-09 23:35:05'),
(58, 518, 4, 'Comida deliciosa, atendimento razoável.', '2023-12-09 23:34:44'),
(58, 519, 4, 'Cozinha elogiável, atendimento é ponto fraco.', '2023-12-09 23:34:49'),
(58, 517, 5, 'Adorei cada momento! Recomendo.', '2023-12-09 23:29:53'),
(58, 516, 5, 'Encantado com a experiência! Comida saborosa, serviço surpreendente.', '2023-12-09 23:29:50'),
(58, 515, 4, 'Pratos saborosos, mas o atendimento precisa melhorar.', '2023-12-09 23:25:11'),
(58, 514, 4, 'Pratos deliciosos, atendimento um pouco desatento.', '2023-12-09 23:25:03'),
(58, 513, 4, 'Comida muito saborosa, atendimento lento.', '2023-12-09 23:24:59'),
(58, 512, 4, 'Sabores surpreendentes, mas atendimento desatento. ', '2023-12-09 23:24:53'),
(58, 511, 4, 'Pratos saborosos, mas o atendimento precisa melhorar.', '2023-12-09 23:24:51'),
(58, 510, 5, 'Prazer em jantar aqui! Comida divina, atendimento calorosos.', '2023-12-09 23:23:41'),
(58, 509, 4, 'Comida deliciosa, atendimento razoável.', '2023-12-09 23:22:14'),
(58, 508, 4, 'Comida muito saborosa, atendimento lento.', '2023-12-09 23:22:08'),
(58, 506, 4, 'Comida boa, atendimento ruim;', '2023-12-09 23:21:57'),
(58, 507, 4, 'Comida deliciosa, atendimento razoável.', '2023-12-09 23:22:02'),
(58, 505, 4, 'Cozinha elogiável, atendimento é ponto fraco.', '2023-12-09 23:21:53'),
(58, 504, 4, 'Comida boa, atendimento ruim;', '2023-12-09 23:21:50'),
(58, 503, 4, 'Comida deliciosa, atendimento razoável.', '2023-12-09 23:21:44'),
(58, 502, 4, 'Sabores surpreendentes, mas atendimento desatento. ', '2023-12-09 23:21:43'),
(58, 501, 4, 'Gostei da qualidade da comida, atendimento mediano.', '2023-12-09 23:18:49'),
(58, 499, 4, 'Comida boa, atendimento ruim;', '2023-12-09 23:18:41'),
(58, 500, 4, 'Comida boa, atendimento ruim;', '2023-12-09 23:18:47'),
(58, 498, 2, 'Comida abaixo das expectativas, atendimento excepcional.', '2023-12-03 20:28:56'),
(58, 497, 2, 'Comida abaixo das expectativas, atendimento excepcional.', '2023-12-03 20:28:52'),
(58, 496, 2, 'Sabores negativos, elogio ao atendimento, amigável e atencioso.', '2023-12-03 20:28:50'),
(58, 495, 2, 'Comida não atendeu, atendimento eficiente e cordial proporcionou conforto.', '2023-12-02 21:27:07'),
(58, 494, 2, 'Comida abaixo das expectativas, atendimento ponto forte.', '2023-12-02 21:27:00'),
(58, 493, 0, 'Experiência negativa, tanto na qualidade da comida quanto no atendimento.', '2023-12-02 21:26:56'),
(58, 492, 0, 'Qualidade da comida e atendimento muito abaixo. Não pretendo repetir.', '2023-12-02 21:26:54'),
(58, 491, 0, 'Culinária questionável, atendimento deixou a desejar. Experiência com impressão negativa.', '2023-12-02 21:26:52'),
(58, 490, 0, 'Comida aquém, atendimento pouco acolhedor. Experiência sem prazer gastronômico.', '2023-12-02 21:26:41'),
(58, 489, 0, 'Experiência negativa, tanto na qualidade da comida quanto no atendimento.', '2023-12-02 21:26:35'),
(58, 488, 0, 'Comida aquém, atendimento pouco acolhedor. Experiência sem prazer gastronômico.', '2023-12-02 21:26:26'),
(58, 487, 2, 'Sabores negativos, elogio ao atendimento, amigável e atencioso.', '2023-12-02 21:26:20'),
(58, 486, 0, 'Comida aquém, atendimento insatisfatório. Combinação comprometeu totalmente experiência.', '2023-11-25 01:18:43'),
(58, 485, 0, 'Culinária questionável, atendimento deixou a desejar. Experiência com impressão negativa.', '2023-11-25 01:18:28'),
(58, 484, 0, 'Culinária questionável, atendimento deixou a desejar. Experiência com impressão negativa.', '2023-11-25 01:18:12'),
(58, 483, 0, 'Comida insatisfatória, atendimento pouco acolhedor. ', '2023-11-25 01:17:59'),
(58, 482, 0, 'Comida abaixo do esperado em sabor, atendimento desatento. Necessita melhorias para se destacar.', '2023-11-25 01:17:56'),
(58, 481, 2, 'Gastronomia decepcionou, atendimento bastante elogiável.', '2023-11-25 01:12:47'),
(58, 480, 2, 'Comida não atendeu, atendimento eficiente e cordial proporcionou conforto.', '2023-11-25 01:12:10'),
(58, 479, 0, 'Pratos não atenderam em sabor, atendimento abaixo. Experiência que não correspondeu às expectativas.', '2023-11-25 01:12:04'),
(58, 478, 2, 'Gastronomia decepcionou, atendimento bastante elogiável.', '2023-11-25 01:11:56'),
(58, 477, 2, 'Comida abaixo das expectativas, atendimento excepcional.', '2023-11-25 01:11:52'),
(58, 476, 2, 'Pratos aquém em sabor, atendimento ponto positivo. Equipe atenciosa e prestativa.', '2023-11-25 01:11:34'),
(58, 475, 2, 'Comida não atendeu, atendimento eficiente e cordial proporcionou conforto.', '2023-11-25 01:11:29'),
(58, 474, 2, 'Comida abaixo das expectativas, atendimento ponto forte.', '2023-11-25 01:11:24'),
(58, 473, 2, 'Pratos aquém em sabor, atendimento ponto positivo. Equipe atenciosa e prestativa.', '2023-11-25 01:10:56'),
(58, 472, 2, 'Comida abaixo das expectativas, atendimento excepcional.', '2023-11-25 01:10:53'),
(58, 471, 0, 'Comida aquém, atendimento insatisfatório. Combinação comprometeu totalmente experiência.', '2023-11-25 01:08:03'),
(58, 470, 0, 'Experiência negativa, tanto na qualidade da comida quanto no atendimento.', '2023-11-25 01:07:55'),
(58, 469, 0, 'Pratos não atenderam em sabor, atendimento abaixo. Experiência que não correspondeu às expectativas.', '2023-11-25 01:07:46'),
(58, 468, 2, 'Culinária não esta à altura, mas a equipe fez o possível para garantir experiência positiva.', '2023-11-25 01:07:31'),
(58, 467, 2, 'Comida abaixo das expectativas, atendimento ponto forte.', '2023-11-25 01:07:25'),
(58, 466, 0, 'Comida e atendimento abaixo do esperado. Experiência que não atendeu expectativas.', '2023-11-25 01:07:22'),
(58, 465, 0, 'Comida aquém, atendimento insatisfatório. Combinação comprometeu totalmente experiência.', '2023-11-25 01:07:13'),
(58, 464, 2, '\"Comida abaixo das expectativas, atendimento excepcional.\"', '2023-11-24 19:21:42'),
(58, 463, 2, '\"Comida abaixo das expectativas, atendimento excepcional.\"', '2023-11-24 19:21:42'),
(58, 462, 4, '\"Comida deliciosa, atendimento razoável. Experiência positiva pelo sabor incrível.\"', '2023-11-24 19:21:42'),
(58, 461, 4, '\"Comida deliciosa, atendimento razoável. Experiência positiva pelo sabor incrível.\"', '2023-11-24 19:21:42'),
(58, 460, 4, '\"Comida deliciosa, atendimento razoável. Experiência positiva pelo sabor incrível.\"', '2023-11-24 19:21:42'),
(58, 459, 0, '\"Comida e atendimento abaixo do esperado. Experiência que não atendeu expectativas.\"', '2023-11-24 19:21:42'),
(58, 458, 5, '\"Adorei cada momento! Comida obra-prima, atendimento cortês e rapidez na refeição. Recomendo.\"', '2023-11-24 19:21:42'),
(58, 457, 5, '\"Adorei cada momento! Comida obra-prima, atendimento cortês e rapidez na refeição. Recomendo.\"', '2023-11-24 19:21:42'),
(58, 456, 5, '\"Adorei cada momento! Comida obra-prima, atendimento cortês e rapidez na refeição. Recomendo.\"', '2023-11-24 19:21:42'),
(58, 455, 5, '\"Adorei cada momento! Comida obra-prima, atendimento cortês e rapidez na refeição. Recomendo.\"', '2023-11-24 19:21:42'),
(68, 691, 0, 'Comida abaixo do esperado em sabor, atendimento desatento.', '2023-12-30 22:38:08'),
(68, 692, 0, 'Comida ruim, atendimento pouco acolhedor. Experiência sem prazer gastronômico.', '2023-12-30 22:38:18'),
(68, 693, 0, 'Comida abaixo do esperado em sabor, atendimento desatento.', '2023-12-30 22:38:23'),
(68, 694, 0, 'Comida abaixo do esperado em sabor, atendimento desatento.', '2023-12-30 22:38:25'),
(68, 695, 0, 'Comida abaixo do esperado em sabor, atendimento desatento.', '2024-01-03 13:25:44'),
(68, 696, 0, 'Culinária questionável, atendimento deixou a desejar. Experiência negativa.', '2024-01-03 13:25:49'),
(68, 697, 2, 'Culinária ruim, mas a equipe fez o possível para garantir experiência.', '2024-01-03 13:41:51'),
(85, 698, 2, 'Comida abaixo das expectativas, atendimento excepcional.', '2024-01-03 13:42:21'),
(85, 699, 2, 'Culinária ruim, mas a equipe fez o possível para garantir experiência.', '2024-01-03 13:42:21'),
(85, 700, 2, 'Atendimento eficiente, mas a comida ficou a desejar.', '2024-01-03 13:42:21'),
(85, 701, 2, 'Pratos mais ou menos, atendimento é ponto positivo.', '2024-01-03 13:42:21'),
(85, 702, 2, 'Gastronomia decepcionou, mas o atendimento bastante elogiável.', '2024-01-03 13:42:40'),
(85, 703, 2, 'Comida abaixo do esperado, mas a equipe é dedicada e receptiva.', '2024-01-03 13:42:40'),
(85, 704, 2, 'Gastronomia decepcionou, mas o atendimento bastante elogiável.', '2024-01-03 13:42:40'),
(68, 705, 2, 'Culinária ruim, mas a equipe fez o possível para garantir experiência.', '2024-01-03 13:45:36'),
(68, 706, 2, 'Culinária ruim, mas a equipe fez o possível para garantir experiência.', '2024-01-03 13:45:36'),
(68, 707, 2, 'Culinária ruim, mas a equipe fez o possível para garantir experiência.', '2024-01-03 13:45:36'),
(68, 708, 2, 'Comida abaixo das expectativas, atendimento ponto forte.', '2024-01-03 13:48:28'),
(68, 709, 2, 'Comida abaixo das expectativas, atendimento excepcional.', '2024-01-03 13:48:28'),
(68, 710, 2, 'Pratos mais ou menos, atendimento é ponto positivo.', '2024-01-03 13:48:28'),
(68, 711, 2, 'Experiência negativa, destaque para atendimento.', '2024-01-03 13:48:28'),
(68, 712, 2, 'Comida abaixo do esperado, mas a equipe é dedicada e receptiva.', '2024-01-05 20:22:19'),
(68, 713, 0, 'Comida ruim, atendimento pouco acolhedor. Experiência sem prazer gastronômico.', '2024-01-05 20:22:29'),
(68, 714, 0, 'Comida ruim, atendimento insatisfatório.', '2024-01-05 20:22:35'),
(68, 715, 0, 'Comida e atendimento abaixo do esperado.', '2024-01-05 20:22:43'),
(68, 716, 0, 'Culinária questionável, atendimento deixou a desejar. Experiência negativa.', '2024-01-05 20:50:53'),
(68, 717, 0, 'Comida insatisfatória, atendimento pouco acolhedor. ', '2024-01-05 20:50:55'),
(86, 718, 2, 'Sabores negativos, elogio ao atendimento, amigável e atencioso.', '2024-01-10 22:06:05'),
(86, 719, 2, 'Culinária ruim, mas a equipe fez o possível para garantir experiência.', '2024-01-10 22:06:10'),
(86, 720, 2, 'Comida abaixo do esperado, mas a equipe é dedicada e receptiva.', '2024-01-10 22:06:15'),
(86, 721, 0, 'Comida ruim, atendimento pouco acolhedor. Experiência sem prazer gastronômico.', '2024-01-10 22:06:19'),
(86, 722, 2, 'Comida abaixo do esperado, mas a equipe é dedicada e receptiva.', '2024-01-10 22:06:30'),
(86, 723, 2, 'Comida abaixo das expectativas, atendimento excepcional.', '2024-01-10 22:06:32');

-- --------------------------------------------------------

--
-- Estrutura da tabela `funcionarios`
--

DROP TABLE IF EXISTS `funcionarios`;
CREATE TABLE IF NOT EXISTS `funcionarios` (
  `idFuncionario` int NOT NULL AUTO_INCREMENT,
  `tipoFuncionario` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
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
) ENGINE=MyISAM AUTO_INCREMENT=116 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `trocas`
--

INSERT INTO `trocas` (`id`, `idUser`, `idPratos`, `qtdPratos`) VALUES
(98, 68, 0, 2),
(99, 68, 10, 6),
(103, 85, 0, 2),
(104, 85, 7, 4),
(105, 68, 2, 1),
(106, 68, 5, 1),
(107, 68, 7, 2),
(108, 68, 19, 1),
(109, 68, 20, 1),
(110, 68, 21, 1),
(111, 86, 0, 1),
(112, 86, 3, 1),
(113, 86, 15, 1),
(114, 86, 17, 2),
(115, 86, 20, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `dinheiro` int NOT NULL DEFAULT '100',
  `avaliacao` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `nome`, `email`, `password`, `dinheiro`, `avaliacao`) VALUES
(58, 'LaisTest', 'lais', '$2b$10$yQ1xYVw4fTYgavJRM.MiuO1dZzUrZ7Im4wJyzinvaR5J4N0F2w.fi', 0, 5),
(59, 'LaisTest2', 'laistest', '$2b$10$SvqEKwzWxZRVNj08VmwgLOjvD5VFC6ZJukGjPcc7CF6mBtowW44XS', 152, 1),
(60, 'LaisTest3', 'lais', '$2b$10$GFfH6/wHmG8TVRRQN3hftORorbvUb/uGEdFGT.aD2pvP4Wj3Llt9i', 100, 2),
(61, 'LaisTest4', 'lais', '$2b$10$Mt1UkXnlTU4lYujDN/5iYes4y30/N/ZZjmcfWCOGCx2qfCTGCVIa.', 100, 4),
(68, 'Wally', 'll', '$2b$10$aOGMsgbe9p98ouvv5nwCpuo344lT6xCSDPTfWUsz/jW3wH6W1S9HC', 41, 1),
(84, 'Lais', 'lais', '$2b$10$XAZCZ2y/9yd6OGYoRF27.OiwAzekJty/gJyeHaH8UDS7cTlooHWKy', 0, 2),
(85, 'Eduardo', 'edu@gmail.com', '$2b$10$IVIZb3hxcFaw6bhnHOjkm.Bv.f3fiRlCUtYRlzBQSanJX4ZZvJequ', 546, 2),
(86, 'Pedro', 'pedro@gmaul.com', '$2b$10$71gFvkWhEch6vcctdlqaGOtglJma.l3057cyNv7aBhKhp6L0S5ife', 4570, 2);

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

INSERT INTO `users_ajudantes` (`idUser`, `idAjudante`, `ativo`) VALUES
(58, 5, 1),
(59, 8, 1),
(68, 6, 0),
(84, 6, 1),
(85, 8, 1),
(86, 8, 1);

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

INSERT INTO `users_chefs` (`idUser`, `idChef`, `ativo`) VALUES
(58, 4, 0),
(59, 4, 0),
(68, 4, 0),
(86, 4, 1);

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

INSERT INTO `users_pratos` (`idUser`, `idPratos`, `qtdPrato`) VALUES
(68, 0, 5),
(68, 10, 6),
(84, 10, 1),
(85, 0, 2),
(85, 10, 3),
(85, 7, 4),
(68, 7, 2),
(68, 5, 1),
(68, 20, 1),
(68, 2, 1),
(68, 19, 1),
(68, 21, 1),
(68, 18, 1),
(86, 17, 2),
(86, 3, 1),
(86, 20, 1),
(86, 22, 1),
(86, 0, 1),
(86, 21, 1),
(86, 5, 1),
(86, 12, 1),
(86, 15, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
