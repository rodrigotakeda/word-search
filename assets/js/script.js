// var words = ['save', 'earn', 'invest', 'retirement', 'account', 'money', 'credit', 'debt', 'assets', 'loan', 'interest', 'accrual',
// 	'economy', 'sharing', 'savings', 'budget', 'capital', 'collateral', 'bond', 'market', 'value', 'index'];

var words = ['COMPETÊNCIA', 'PROTAGONISMO', 'DIÁLOGOS', 'DESENVOLVIMENTO', 'PROATIVIDADE'];


// var words = ['COMPETÊNCIA', 'PROTAGONISMO', 'DIÁLOGOS', 'DESENVOLVIMENTO', 'PROATIVIDADE', 'COLABORAÇÃO', 'PLANEJAMENTO', 'CARREIRA', 'DESEMPENHO', 'AVALIAÇÃO', 'METAS', 'RESULTADOS', 'APRENDIZADO', 'MELHORIA', 'EXECUÇÃO', 'OBJETIVOS', 'AUTOCONHECIMENTO', 'APRIMORAMENTO', 'PROGRESSO', 'CONQUISTA'];

// start a word find game
var gamePuzzle = wordfindgame.create(
	words,
	'.puzzleBoard',
	'.puzzleWords',
	{
		height: 15,
		width: 15,
		fillBlanks: true
	});

// $('#solve').click(function () {
// 	wordfindgame.solve(gamePuzzle, words);
// });

// create just a puzzle, without filling in the blanks and print to console
// var puzzle = wordfind.newPuzzle(
// 	words,
// 	{ height: 5, width: 15, fillBlanks: true }
// );
// wordfind.print(puzzle);