// SHUFFLE
Array.prototype.shuffleArray = function () { return this.sort(() => Math.random() - 0.5); }

// QUEBRA ARRAY
const quebraArray = (array, size) =>
  array.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(array.slice(i, i + size))
    return acc
}, [])

///////
const wordsJson = [
	{
		id: 1,
		nome: "COMPETÊNCIA",
		descricao: "Competência é a sinergia entre conhecimentos, habilidades e atitudes. Os conhecimentos representam a base teórica e prática, as habilidades são capacidades específicas, e as atitudes refletem a postura proativa."
	},
	{
		id: 2,
		nome: "PROTAGONISMO",
		descricao: "Protagonismo é a capacidade de assumir o controle da própria carreira e agir de forma proativa na busca por oportunidades de crescimento. Ele é fundamental para o seu desenvolvimento."
	},
	{
		id: 3,
		nome: "DIÁLOGOS",
		descricao: "Ao logo do ano, os(as) colaboradores(as) e as lideranças são estimulados(as) a realizarem diálogos contínuos, uma prática que propõe conversas periódicas para sustentar o direcionamento e orientações sobre os acordos e metas estabelecidas, além de promover conversas sobre carreira e desempenho."
	},
	{
		id: 4,
		nome: "DESENVOLVIMENTO",
		descricao: "A capacidade de liderar a si mesmo(a) é fundamental para identificar oportunidades de aprendizado no dia a dia, contribuindo para o desenvolvimento contínuo."
	},
	{
		id: 5,
		nome: "PROATIVIDADE",
		descricao: "Ao adotar uma postura ativa em sua carreira, o(a) profissional se coloca no comando da sua jornada em busca de seus objetivos e necessidades de desenvolvimento."
	},
	{
		id: 6,
		nome: "COLABORAÇÃO",
		descricao: "Estamos todos(as) no mesmo time, e cada esforço individual contribui para o fortalecimento coletivo. Buscar a melhor versão de si mesmo(a) diariamente é fundamental para atingirmos os nossos resultados."
	},
	{
		id: 7,
		nome: "PLANEJAMENTO",
		descricao: "O planejamento é o alicerce para atingir metas e construir uma carreira alinhada aos seus objetivos."
	},
	{
		id: 8,
		nome: "CARREIRA",
		descricao: "A carreira simboliza a nossa trajetória profissional e, como protagonistas, precisamos assumir o controle ativo dessa jornada, tomando decisões conscientes para alcançar os objetivos, desenvolvimento e satisfação pessoal."
	},
	{
		id: 9,
		nome: "DESEMPENHO",
		descricao: "Você está alcançando os resultados desejados em sua função? Refletir sobre o próprio desempenho permite identificar realizações, oportunidades de aprimoramento e estabelecer metas para o futuro."
	},
	{
		id: 10,
		nome: "AVALIAÇÃO",
		descricao: "A Avaliação de Competências é um processo anual no qual os(as) gestores(as) e os(as) colaboradores(as), analisam o seu desempenho ao longo do ano. São avaliados o comportamento, resultados e as entregas dos(as) colaboradores(as), registrando essas informações em um sistema chamado PGP (Portal Gestão de Pessoas)."
	},
	{
		id: 11,
		nome: "META",
		descricao: "Ao definir com clareza as suas metas e realizar uma análise cuidadosa dos pontos a serem aprimorados, você fortalece a sua jornada em direção ao sucesso profissional."
	},
	{
		id: 12,
		nome: "RESULTADO",
		descricao: "Ao se superar constantemente, você constrói o caminho para alcançar os melhores resultados possíveis."
	},
	{
		id: 13,
		nome: "APRENDIZADO",
		descricao: "A cada dia, você tem a oportunidade de aprender algo novo. Cultive uma mentalidade de melhoria constante e trace o seu plano de desenvolvimento pessoal."
	},
	{
		id: 14,
		nome: "MELHORIA",
		descricao: "Para melhorar a cada dia, comprometa-se a atingir pequenas metas diárias, pois são essas conquistas somadas que o(a) conduzirão a patamares mais elevados de desempenho."
	},
	{
		id: 15,
		nome: "EXECUÇÃO",
		descricao: "Definir um plano de desenvolvimento e executar as atividades planejadas são ações fundamentais para manter sua trajetória profissional na direção desejada."
	},
	{
		id: 16,
		nome: "OBJETIVO",
		descricao: "Avaliar as suas competências ajuda a redefinir e fortalecer os seus objetivos, garantindo uma trajetória profissional mais alinhada."
	},
	{
		id: 17,
		nome: "AUTOCONHECIMENTO",
		descricao: "Conhecer as suas habilidades, pontos fortes e oportunidades de melhoria é fundamental para o seu desenvolvimento profissional e pessoal."
	},
	{
		id: 18,
		nome: "APRIMORAMENTO",
		descricao: "A busca pelo aprimoramento é uma constante na sua jornada de desenvolvimento. Identifique os pontos que o(a) auxiliarão a tornar-se melhor a cada dia."
	},
	{
		id: 19,
		nome: "PROGRESSO",
		descricao: "A jornada do desenvolvimento é guiada pelo progresso constante. Permita que cada avanço seja um degrau em direção às suas metas e aspirações."
	},
	{
		id: 20,
		nome: "CONQUISTA",
		descricao: "Conquistas são feitos notáveis obtidos ao atingir metas ou superar desafios, representando marcos significativos que evidenciam o sucesso em várias áreas da vida, tanto individual quanto coletivamente."
	},
];

let arraySorted,
	arrayBreak,
	gamePuzzle,
	persCount,
	imgCount,
	flagFinalizaGame = false,
	wordsAtTime = [],
	countArray = 0;

arraySorted = wordsJson.shuffleArray();
arrayBreak = quebraArray(arraySorted, 5);

/////////////

function isEven(number) { return Math.floor(number / 2) * 2 === number; }

// MODAL
const popIntro = $('.popupIntro');
popIntro.find('button').on('click', escondeModal);

function chamaModal(pop, effect, item) {
	$('.puzzleImage').find('img').removeClass('voltaBlur');

	// $('#modalWord').find('.popLearning').hide();
	if (pop != '') $('#modalWord').find('.' + pop).show();

	if (effect == '') effect = 'aparece';
	if (item) {
		// console.log(item)
		$.each(wordsJson, function(i, val) {
			if (item == val.nome) {
				popIntro.find('h4').html(val.nome);
				popIntro.find('p').html(val.descricao);
			}
		});
	}
	$('#modalWord').removeAttr('class').removeAttr('style').addClass(effect);
}
function escondeModal() {
	changeImage();
	if (flagFinalizaGame) finalizaGame();
	$('#modalWord').addClass('out').delay(600).hide(100);
}

//// TRANSIÇÕES
$('.btnComeca').on('click', function() {
	$('header').find('.logoPuzzle').addClass('logoAnima');
	$('.blocoCapa').addClass('unfoldOut');
	$('.blocoIntro').addClass('unfoldIn');
});

$('.btnIniciar').on('click', function() {
	$('.blocoIntro').removeClass('unfoldIn reDo').addClass('unfoldOut');
	
	createWord();

	$('.telaPadrao').addClass('abs');
	$('.gameContent').addClass('fadeIn').removeClass('hidden');
});

$('.btnAvancar').on('click', function() {
	$('.blocoFeed').addClass('unfoldIn');
	$('.gameContent').addClass('fadeOut');

	setTimeout(() => {
		$('.gameContent').removeClass('fadeOut').removeClass('fadeIn');
		$('.telaPadrao').removeClass('abs');
	}, 1000)
});

$('.btnReiniciar').on('click', function() {
	if (countArray == 4) {
		arraySorted = [];
		arrayBreak = [];
		arraySorted = wordsJson.shuffleArray();
		arrayBreak = quebraArray(arraySorted, 5);
		countArray = 0;
	}
	
	$('header').find('.logoPuzzle').addClass('removeAnima');
	$('.blocoCapa').removeClass('unfoldOut').addClass('reDo');
	$('.blocoFeed').removeClass('unfoldIn').addClass('unfoldOut');

	setTimeout(() => {
		$('header').find('.logoPuzzle').removeClass('logoAnima').removeClass('removeAnima');
		$('.blocoCapa').removeClass('unfoldOut reDo');
		$('.blocoIntro').removeClass('unfoldOut');
		$('.blocoFeed').removeClass('unfoldOut');
	}, 1000)
});

function createWord() {
	wordsAtTime = [];
	$('.puzzleWords').empty();
	if (isEven(countArray)) 
		persCount = 'P1' 
	else 
		persCount = 'P2';

	$('.puzzleImage').find('img').attr('src', 'images/' + persCount + '_1.png');
	$('.btnAvancar').removeClass('show');

	$.each(arrayBreak[countArray], function(i, v){
		wordsAtTime.push(v.nome);
	})
	gamePuzzle = wordfindgame.create(
		wordsAtTime,
		'.puzzleBoard',
		'.puzzleWords',
		{
			height: 15,
			width: 15,
			fillBlanks: true,
			orientations : ['horizontal','vertical','diagonal']
		}
	)
	countArray++;
}
function finalizaGame() {
	$('.btnAvancar').addClass('show');
	flagFinalizaGame = false;
}


let changeImage = function() {
	$('.puzzleImage').find('img').addClass('someBlur');

	setTimeout(() => { 
		$('.puzzleImage').find('img').attr('src', 'images/' + persCount + '_' + imgCount + '.png');
		$('.puzzleImage').find('img').removeClass('someBlur').addClass('voltaBlur');
	}, 700)
}



// let counter = 1;
// $('.btnNote').on('click', function() {
// 	if (counter < 6) {
// 		counter++;
// 		$('.puzzleImage').find('img').addClass('animaPulo');
		
// 		setTimeout(() => { 
// 			$('.puzzleImage').find('img').attr('src', 'images/' + persCount + '_' + counter + '.png');
// 			$('.puzzleImage').find('img').removeClass('animaPulo');
// 		}, 400)
// 	}
// });