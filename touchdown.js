// в эту функцию мы поместим всё, что связано с касанием кирпичей 
	function touchdown(t_brick) { 
	// начисляем очки в зависимости от цвета кирпича 
	switch(t_brick.color) { 
		case "yellow" : score += 1; break; 
		case "green" : score += 2; break; 
		case "orange" : score += 3; break; 
		case "red" : score += 4; 
	} 
	// за каждые 25 очков — увеличиваем размер платформы на 2 пикселя 
	if (score > score_paddle) { 
		paddle.width += 2; 
		// следующее увеличение — через 25 очков 
		score_paddle += 25; 
	} 
	// а за каждые 100 очков в одной попытке — прибавляем ещё одну жизнь 
	if (score > score_lives) { 
		lives += 1; 
		// и усложняем игру — увеличиваем скорость шарика 
		ball.speed += 1; 
		// сразу меняем скорость движения по осям 
		if (ball.dx > 0) { 
			ball.dx = ball.speed
		} else {
			ball.dx = -1 * ball.speed
		}; 
		
		if (ball.dy > 0) { 
			ball.dy = ball.speed
		} else {
			ball.dy = -1 * ball.speed
		}; 
		// следующее увеличение жизни — через 100 очков 
		score_lives += 100; 
	} 
}

