'<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">'

//banco de dados, futuramente exportado de um arquivo, preenchido pelo backend
var datas = {
      anuncios: [{
            titulo: 'Fiorino 2010',
            valor: 'R$ 22.000,00',
            tipo: 'carros',
            data: 'Hoje',
            hora: '12:00',
            imagem: 'imagens/fiorino1.jpg',
            link: 'fiorino.html',
            quilometragem: '480 km',
            ano: '2010',
            combustivel: 'gasolina',
            descricao: ' bla bla bla',
            nome: 'joao',
            email: 'joao@email.com',
            telefone: '(48) 9999-9999'
      },

      {
            titulo: 'Gol 2012',
            valor: 'R$ 25.000,00',
            tipo: 'carros',
            data: 'Hoje',
            hora: '13:00',
            imagem: 'imagens/gol.jpg',
            link: 'javascript:void(0)'
      },

      {
            titulo: 'GSX-S1000A',
            valor: 'R$ 4.000,00',
            tipo: 'motos',
            data: 'Hoje',
            hora: '17:00',
            imagem: 'imagens/GSX.jpg',
            link: 'javascript:void(0)'
      },

      {
            titulo: 'cadeira',
            valor: 'R$ 1.000,00',
            tipo: 'para sua casa',
            data: 'Ontem',
            hora: '10:00',
            imagem: 'imagens/cadeira.jpg',
            link: 'javascript:void(0)'
      },

      {
            titulo: 'IPHONE X',
            valor: 'R$ 5.000,00',
            tipo: 'eletrônicos',
            data: 'Ontem',
            hora: '18:00',
            imagem: 'imagens/iphone.jpg',
            link: 'javascript:void(0)'
      },

      {
            titulo: 'Apartamento 50m2',
            valor: 'R$ 1.500,00',
            tipo: 'aluguel de imóveis',
            data: 'Ontem',
            hora: '15:00',
            imagem: 'imagens/apartamento.jpg',
            link: 'javascript:void(0)'
      }],

      tipocarro: 'carros',
      tipomoto: 'motos',
      tipoelet: 'eletrônicos',
      tipoaluguel: 'aluguel de imóveis',
      tipocasa: 'para sua casa'

};

// registro componente modal 
Vue.component('modal', {
      template: '#modal-template'
});

var tamanhoarray = Vue.extend({
      data: function () {
            return datas;
      },
      template:
            '<ul>' +
            '<div class="fonte-numanuncios">' +
            '{{anuncios.length}} anúncios encontrados' +
            '</div>' +
            '</ul>'
});

var tamanhoarraycarros = Vue.extend({
      data: function () {
            var object = {
                  count: 0
            };
            for (anuncio of datas.anuncios) {
                  if (anuncio.tipo === 'carros') {
                        object.count += 1;
                  }
            }
            return object;
      },
      template:
            '<ul>' +
            '<div class="fonte-numanuncios">' +
            '{{count}} anúncios encontrados' +
            '</div>' +
            '</ul>'
});

var tamanhoarrayimoveis = Vue.extend({
      data: function () {
            var object = {
                  count: 0
            };
            for (anuncio of datas.anuncios) {
                  if (anuncio.tipo === 'aluguel de imóveis') {
                        object.count += 1;
                  }
            }
            return object;
      },
      template:
            '<ul>' +
            '<div class="fonte-numanuncios">' +
            '{{count}} anúncios encontrados' +
            '</div>' +
            '</ul>'
});
var tamanhoarraymotos = Vue.extend({
      data: function () {
            var object = {
                  count: 0
            };
            for (anuncio of datas.anuncios) {
                  if (anuncio.tipo === 'motos') {
                        object.count += 1;
                  }
            }
            return object;
      },
      template:
            '<ul>' +
            '<div class="fonte-numanuncios">' +
            '{{count}} anúncios encontrados' +
            '</div>' +
            '</ul>'
});
var tamanhoarrayelet = Vue.extend({
      data: function () {
            var object = {
                  count: 0
            };
            for (anuncio of datas.anuncios) {
                  if (anuncio.tipo === 'eletrônicos') {
                        object.count += 1;
                  }
            }
            return object;
      },
      template:
            '<ul>' +
            '<div class="fonte-numanuncios">' +
            '{{count}} anúncios encontrados' +
            '</div>' +
            '</ul>'
});
var tamanhoarraycasa = Vue.extend({
      data: function () {
            var object = {
                  count: 0
            };
            for (anuncio of datas.anuncios) {
                  if (anuncio.tipo === 'para sua casa') {
                        object.count += 1;
                  }
            }
            return object;
      },
      template:
            '<ul>' +
            '<div class="fonte-numanuncios">' +
            '{{count}} anúncios encontrados' +
            '</div>' +
            '</ul>'
});



/**  Declarando os componentes**/
var ItensComp = Vue.extend({
      data: function () {
            return datas;
      },
      template:

            '<ul>' +
            '<div v-for="anuncio in anuncios" >' +
            '<div class="box-produto margin">' +
            '<table style="width:100%">' +
            '<tr>' +
            '<td rowspan="2" style="width: 25%">' +
            '<img v-bind:src="anuncio.imagem"  style="width: 75%; margin-left: 5%">' +
            '</td>' +
            '<td style="height: 100px">' +
            '<span class=" fonte-produto ">' +
            '<b>{{anuncio.titulo }}</b>' +
            '</span>' +
            '</td>' +
            '<td rowspan="2"style="width: 25%" valign="top">' +
            '<span class="right fonte-valor" style="margin-top:20px; margin-right:20px">' +
            '<b>{{ anuncio.valor }}</b>' +
            '</span>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td style="height: 70px">' +
            '<b class= "box-tipo" >{{anuncio.tipo}}</b>' +
            '<span class="fonte-data" >     {{anuncio.data}}  {{anuncio.hora}}</span>' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '</div>' +
            '</ul>'

});

var ItensCarros = Vue.extend({
      data: function () {
            return datas;
      },
      template:

            '<ul>' +
            '<div v-for="anuncio in anuncios" >' +
            '<div v-if = "anuncio.tipo===tipocarro">' +
            '<div class="box-produto margin">' +
            '<table style="width:100%">' +
            '<tr>' +
            '<td rowspan="2" style="width: 25%">' +
            '<img v-bind:src="anuncio.imagem" style="width: 75%; margin-left: 5%">' +
            '</td>' +
            '<td style="height: 100px">' +
            '<span class=" fonte-produto ">' +
            '<a v-bind:href="anuncio.link" class="bar-item tablink button">{{anuncio.titulo }}</a>' +
            '</span>' +
            '</td>' +
            '<td rowspan="2"style="width: 25%" valign="top">' +
            '<span class="right fonte-valor" style="margin-top:20px; margin-right:20px">' +
            '<b>{{ anuncio.valor }}</b>' +
            '</span>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td style="height: 70px">' +
            '<b class= "box-tipo" > {{anuncio.tipo}}</b>' +
            '<span class="fonte-data" >     {{anuncio.data}}  {{anuncio.hora}}</span>' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</ul>'

});

var ItensEletronico = Vue.extend({
      data: function () {
            return datas;
      },
      template:

            '<ul>' +
            '<div v-for="anuncio in anuncios" >' +
            '<div v-if = "anuncio.tipo===tipoelet">' +
            '<div class="box-produto margin">' +
            '<table style="width:100%">' +
            '<tr>' +
            '<td rowspan="2" style="width: 25%">' +
            '<img v-bind:src="anuncio.imagem" style="width: 75%; margin-left: 5%">' +
            '</td>' +
            '<td style="height: 100px">' +
            '<span class=" fonte-produto ">' +
            '<a v-bind:href="anuncio.link" class="bar-item tablink button">{{anuncio.titulo }}</a>' +
            '</span>' +
            '</td>' +
            '<td rowspan="2"style="width: 25%" valign="top">' +
            '<span class="right fonte-valor" style="margin-top:20px; margin-right:20px">' +
            '<b>{{ anuncio.valor }}</b>' +
            '</span>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td style="height: 70px">' +
            '<b class= "fa fa-car box-tipo" > {{anuncio.tipo}}</b>' +
            '<span class="fonte-data" >     {{anuncio.data}}  {{anuncio.hora}}</span>' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</ul>'

});
var ItensMotos = Vue.extend({
      data: function () {
            return datas;
      },
      template:

            '<ul>' +
            '<div v-for="anuncio in anuncios" >' +
            '<div v-if = "anuncio.tipo===tipomoto">' +
            '<div class="box-produto margin">' +
            '<table style="width:100%">' +
            '<tr>' +
            '<td rowspan="2" style="width: 25%">' +
            '<img v-bind:src="anuncio.imagem" style="width: 75%; margin-left: 5%">' +
            '</td>' +
            '<td style="height: 100px">' +
            '<span class=" fonte-produto ">' +
            '<b>{{anuncio.titulo }}</b>' +
            '</span>' +
            '</td>' +
            '<td rowspan="2"style="width: 25%" valign="top">' +
            '<span class="right fonte-valor" style="margin-top:20px; margin-right:20px">' +
            '<b>{{ anuncio.valor }}</b>' +
            '</span>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td style="height: 70px">' +
            '<b class= "box-tipo" >{{anuncio.tipo}}</b>' +
            '<span class="fonte-data" >     {{anuncio.data}}  {{anuncio.hora}}</span>' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</ul>'

});

var ItensImoveis = Vue.extend({
      data: function () {
            return datas;
      },
      template:

            '<ul>' +
            '<div v-for="anuncio in anuncios" >' +
            '<div v-if = "anuncio.tipo===tipoaluguel">' +
            '<div class="box-produto margin">' +
            '<table style="width:100%">' +
            '<tr>' +
            '<td rowspan="2" style="width: 25%">' +
            '<img v-bind:src="anuncio.imagem" style="width: 75%; margin-left: 5%">' +
            '</td>' +
            '<td style="height: 100px">' +
            '<span class=" fonte-produto ">' +
            '<b>{{anuncio.titulo }}</b>' +
            '</span>' +
            '</td>' +
            '<td rowspan="2"style="width: 25%" valign="top">' +
            '<span class="right fonte-valor" style="margin-top:20px; margin-right:20px">' +
            '<b>{{ anuncio.valor }}</b>' +
            '</span>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td style="height: 70px">' +
            '<b class= "box-tipo" >{{anuncio.tipo}}</b>' +
            '<span class="fonte-data" >     {{anuncio.data}}  {{anuncio.hora}}</span>' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</ul>'

});
var ItensCasa = Vue.extend({
      data: function () {
            return datas;
      },
      template:

            '<ul>' +
            '<div v-for="anuncio in anuncios" >' +
            '<div v-if = "anuncio.tipo===tipocasa">' +
            '<div class="box-produto margin">' +
            '<table style="width:100%">' +
            '<tr>' +
            '<td rowspan="2" style="width: 25%">' +
            '<img v-bind:src="anuncio.imagem" style="width: 75%; margin-left: 5%">' +
            '</td>' +
            '<td style="height: 100px">' +
            '<span class=" fonte-produto ">' +
            '<b>{{anuncio.titulo }}</b>' +
            '</span>' +
            '</td>' +
            '<td rowspan="2"style="width: 25%" valign="top">' +
            '<span class="right fonte-valor" style="margin-top:20px; margin-right:20px">' +
            '<b>{{ anuncio.valor }}</b>' +
            '</span>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td style="height: 70px">' +
            '<b class= "box-tipo" >{{anuncio.tipo}}</b>' +
            '<span class="fonte-data" >     {{anuncio.data}}  {{anuncio.hora}}</span>' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</ul>'

});

var fiorino = Vue.extend({
      data: function () {
            return datas;
      },
      template:

            '<ul>' +
            '<table style="width:100%">' +
            '<tr>' +
            '<td colspan="3"  class=" fonte-produto"><b>{{anuncios[0].titulo}}</b></td>' +
            '</tr>' +
            '<tr>' +
            '<td class="fonte-data"><b class= "box-tipo" >{{anuncios[0].tipo}}</b> {{anuncios[0].data}} {{anuncios[0].hora}}</td>' +
            '<td><b class="right fonte-valor" style="margin-top:20px; margin-right:20px">{{anuncios[0].valor}}</b></td>' +
            '<td style="width:20%"></td>' +
            '</tr>' +
            '<tr>' +
            '<td colspan="2" class="center">'+
            '<div class="box-anuncio margin">'+
            '<table style= "width:100%">'+
            '<tr>'+
            '<td class="big text-light-grey" style="width:10%; font-size: 90px"><b> < </b></td>'+
            '<td class="center"><img v-bind:src="anuncios[0].imagem" style="width: 80%; margin-left: 5%"></td>'+
            '<td class="big text-light-grey" style="width:10%; font-size: 90px"><b>></b></td>'+
            '</tr>'+
            '</table>'+
            '</div>'+
            '</td>' +
            '<td class="text-light-grey" style="width:20%" rowspan="3"  valign="top">'+
            '<div class="  box-dados margin">'+
            '<b>Dados do Contato</b>'+
            '<hr>'+
            '<br>'+
            '<b class="fa fa-user big text-white left"> {{anuncios[0].nome}}</b>'+
            '<br>'+
            '<br>'+
            '<b class="fa fa-envelope big text-white left"> {{anuncios[0].email}}</b>'+
            '<br>'+
            '<br>'+
            '<b class="fa fa-phone big text-white left"> {{anuncios[0].telefone}}</b>'+
            '<br>'+
            '<br>'+
            '<button class="button-converse text-navy-blue">Converse com {{anuncios[0].nome}}</button>'+
            '</div>'+
            '</td>' +
            '</tr>' +
            '</tr>' +
            '<tr>' +
            '<td colspan="2">' +
            '<img v-bind:src="anuncios[0].imagem" class="img-pequena" style="width:100px; margin-left: 5%">' +
            '<img v-bind:src="anuncios[0].imagem" class="img-pequena" style="width:100px; margin-left: 5%">' +
            '<img v-bind:src="anuncios[0].imagem" class="img-pequena" style="width:100px; margin-left: 5%">' +
            '</td>' +
            '</tr>' +
            '</tr>' +
            '<tr>' +
            '<td colspan="2">'+
            '{{anuncios[0].descricao}}'+
            '<br>'+
            '<hr>'+
            '<b>Quilometragem</b>  {{anuncios[0].quilometragem}}'+
            '<br>'+
            '<hr>'+
            '<b>Ano</b>  {{anuncios[0].ano}}'+
            '<br>'+
            '<hr>'+
            '<b>Combustível</b>  {{anuncios[0].combustivel}}'+
            '<br>'+
            '</td>' +
            '</tr>' +
            '</table>' +
            '</ul>'

});


/** Registrando componentes **/
Vue.component('itens-comp', ItensComp);
Vue.component('tamanho', tamanhoarray);
Vue.component('carros', ItensCarros);
Vue.component('casa', ItensCasa);
Vue.component('imoveis', ItensImoveis);
Vue.component('motos', ItensMotos);
Vue.component('fiorino', fiorino);
Vue.component('eletronicos', ItensEletronico);
Vue.component('tamanhocarros', tamanhoarraycarros);
Vue.component('tamanhomotos', tamanhoarraymotos);
Vue.component('tamanhoelet', tamanhoarrayelet);
Vue.component('tamanhoimoveis', tamanhoarrayimoveis);
Vue.component('tamanhocasa', tamanhoarraycasa);


new Vue({
      el: '#app',
      data: {
            showModal: false
      }
});

new Vue({
      el: '#app1',
      data: datas
});

new Vue({
      el: '#app2',
      data: datas
});

new Vue({
      el: '#sele',
      data: {
            selected: 'Mais Recentes'
      }
})
