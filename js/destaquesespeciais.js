var doc1 = {
	"id":"DA168",
	"title":"Doenças e sua origem",
	"description":"Proveniência de doenças e nossa participação em sua permanência Males do corpo físico que poderiam ser removidos com uma simples mudança de rumo",
	"keywords":"2004"
};

var doc2 = {
	"id":"DA198",
	"title":"Linhas de cura",
	"description":"Possibilidades de cura através dos reinos vegetal e mineral Oportunidade na medicina de descobrir plantas e minerais ricos em prevenção de moléstias Novas possibilidades que aguardam a atenção de pesquisadores O sistema nervoso humano e as plantas",
	"keywords":"2004"
};

var doc3 = {
	"id":"DA295",
	"title":"Células tronco e forças involutivas",
	"description":"Medicina universal e não revelada",
	"keywords":"2005"
};

var doc4 = {
	"id":"DA592",
	"title":"Cinco livros de cura e curadores cósmicos dos planos intraterrenos",
	"description":"Instrução na formação de curadores",
	"keywords":"2008"
};

var doc5 = {
	"id":"DA618",
	"title":"Consciência física nesta época de transição",
	"description":"Trabalho de união dos planos de consciência do ser",
	"keywords":"2009"
};

var doc6 = {
	"id":"DA632",
	"title":"Revelações da Nave Alfa sobre as flores",
	"description":"As flores como símbolo de devoção, oferta e serviço do reino vegetal ao planeta e à humanidade",
	"keywords":"2009"
};

var doc7 = {
	"id":"DA778",
	"title":"A origem dos vírus na situação planetária atual",
	"description":"O choque do carma humano com as Leis Universais, segundo Murielh / Vírus Ebola / Silêncio e oração como serviço",
	"keywords":"2014"
};

var idx = elasticlunr(function () {
	this.addField('title');
	this.addField('description');
	this.addField('keywords');
	this.setRef('id');
});

idx.addDoc(doc1);
idx.addDoc(doc2);
idx.addDoc(doc3);
idx.addDoc(doc4);
idx.addDoc(doc5);
idx.addDoc(doc6);
idx.addDoc(doc7);
