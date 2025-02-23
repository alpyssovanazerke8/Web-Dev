import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  categories = ['Books', 'Phones', 'Toys', 'Watches'];
  selected = 'Books';

  products = [
    {
      id : 1,
      category : 'Toys',
      price: 2500 ,
      name: 'Обучающий набор Tilashar пластик, картон',
      description: 'Обучающий набор Tilashar для того чтобы увеличить словарный запас ребенка. Все карточки на казахском языке.',
      rating: 4.5,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h34/80721531830302.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/obuchajuschii-nabor-tilashar-plastik-karton-110318230/?c=750000000',
    },
    {
      id : 2,
      category : 'Toys',
      name: 'Набор развивающих игрушек',
      description: 'Особое значение имеют развивашки — игры, помогающие совершенствовать мелкую моторику, развивающие мышление, творческое воображение, закрепляющие навыки самостоятельного выбора решений.',
      rating: 4.7,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa0/p69/8929737.jpeg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/sorter-nabor-razvivajuschih-igrushek-derevo-108447545/?c=750000000',
      price: 2150
    },
    {
      id : 3,
      category : 'Toys',
      name: 'Интерактивная игрушка PROON Утята на лесенке',
      description: 'Милые маленькие желтые утки забавно передвигаются по ступенькам и могут скользить по дорожкам. Интерактивная игрушка со звуковым и световым сопровождением',
      rating: 4.2,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc5/ha0/64458875699230.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/interaktivnaja-igrushka-proon-utjata-na-lesenke-plastik-104141144/?c=750000000',
      price: 1378
    },
    {
      id : 4,
      category : 'Books',
      name: 'Книга Исабеков Д.: Сүйекші',
      description: 'Дулат Исабековтің шығармаларында қоғам, әлеумет, не тарих емес, адам жаны әрдайым басты планда. Ол өзінің әңгімелері мен повестерінде жұрт ішінде жүрген, бірақ сол жұрт байқай бермейтін елеусіз жандардың ішкі жан-дүниесін, олардың тауқыметті тағдырын терең суреттейді. Мәселен, қолыңыздағы кітапта берілген «Сүйекші» повесінің кейіпкері Тұңғыш сияқты диуана, қабір қазушы секілді кәсіптен несібесін айырған жандардың арман-мұраты, тыныс-тіршілігі көп адам үшін беймәлім. Жазушының қырағылығы мен шеберлігі болса керек, адамдар арасындағы осындай «Үндемес» жандардың басындағы мұң-зарды, трагедияны бір ғана кейіпкердің баянсыз ғұмыры арқылы бере білген.',
      rating: 4.8,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfb/hd7/63877660246046.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/isabekov-d-s-ieksh--102332094/?c=750000000',
      price: 1100
    },
    {
      id : 5,
      category : 'Books',
      name: 'Книга Клир Д.: Атомные привычки',
      description: 'Лучшая деловая книга 2018 года по версии Fast Company.Лучшая книга по самопомощи 2018 года по версии Business Insider.Может ли одна монетка сделать человека богатым? Конечно нет, скажете вы. Но если добавить еще одну? И еще? И еще? В какой-то момент количество перейдет в качество.А теперь представьте, что одно крошечное изменение кардинально меняет всю жизнь. Звучит фантастически Но, как и в случае с монетками, срабатывает эффект сложного процента.И вот уже маленькое, но регулярное действие привело к большим результатам.Атомные привычки — маленькие изменения, в которых скрыта огромную мощь!',
      rating: 4.5,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4c/h9a/86244289314846.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/klir-d-atomnye-privychki-117680550/?c=750000000',
      price: 2197
    },
    {
      id : 6,
      category : 'Phones',
      name: 'Iphone 14',
      description: 'Apple iPhone 14 – компактная модель с безрамочным дисплеем OLED 6.1 дюйма. Стеклянный корпус мобильного устройства соответствует стандарту защищенности IP68 – он устойчив к воздействию влаги и пыли. Передняя панель обладает покрытием Ceramic Shield для защиты экрана от появления царапин и различных дефектов.',
      rating: 4.7,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?format=gallery-medium',
      price: 336547,
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000',
    },
    {
      id : 7,
      category : 'Phones',
      name: 'Iphone 15',
      description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн. Смартфон получил динамический остров, на который выводятся уведомления и другая важная информация.',
      rating: 4.8,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
      price:379458
    },
    {
      id : 8,
      category : 'Phones',
      name: 'Samsung A55',
      description: 'Samsung представила новый смартфон среднебюджетной A-серии – Galaxy A55, и на сегодня это топовая модель линейки, получившая значительные улучшения как в характеристиках, так и в программном обеспечении, в том числе и мощный процессор с графикой от AMD. ',
      rating: 4.8,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000',
      price:179990
    },
    {
      id : 9,
      category : 'Watches',
      name: 'Часы Кварцевые женские Neppo Golden Fish',
      description: 'Женские кварцевые часы Neppo Golden Fish — это стильное сочетание элегантности и функциональности. Комплект включает часы с надежным кварцевым механизмом, оригинальный браслет из нержавеющей стали и подарочный футляр. Уникальный дизайн браслета, напоминающий плавники рыбы, придает аксессуару особую изысканность.',
      rating: 4.5,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h50/hd7/84441415614494.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/kvartsevye-zhenskie-neppo-golden-fish-s-brasletom-zolotistye-s-belym-tsiferblatom-114322222/?c=750000000',
      price: 9900
    },
    {
      id : 10,
      category : 'Watches',
      name: 'Часы Кварцевые CASIO MTP-1374L-1AVDF',
      description: 'Наручные часы Casio MTP-1374L-1A является близнецом Casio MTP-1375L-1A.Главное их различие в том, что Casio MTP-1374L-1A имеет чёрный безель с золитистыми цифрами, которые помогают засекать отрезки времени по шкале, аналогично таймеру.',
      rating: 4.7,
      likes : 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha1/ha8/63763581960222.jpg?format=gallery-medium',
      link: 'http://kaspi.kz/shop/p/kvartsevye-casio-mtp-1374l-1avdf-stal--21400996/?c=750000000',
      price:23998
    },
  ];

  getfilteredProducts(){

    var filtered = []
    for(var i = 0; i < this.products.length;i++){
      if(this.products[i].category === this.selected){
        filtered.push(this.products[i]);
      }
    }
    return filtered;
  }

  selectCategory(event : any){
    this.selected = event?.target.value;
  }

  removeProduct(id : number){
    var newProducts = []
    for(var i = 0; i < this.products.length;i++){
      if(this.products[i].id !== id){
        newProducts.push(this.products[i]);
      }
    }
    this.products = newProducts;
  }

  likeProduct(id : number){
    for(var i = 0; i < this.products.length;i++){
      if(this.products[i].id === id){
        this.products[i].likes += 1;
      }
    }
  }

  shareProduct(link: string, platform: string) {
    let shareUrl = '';
    if (platform === 'whatsapp') {
      shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    }
    window.open(shareUrl, '_self');
  }
}
