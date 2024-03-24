const app = {
    data(){
        return{
            currentPage: 'О нас',
            lastPage: 'О нас',
            currentSlideIndex: 0,
            slides:[
                {id:0, img:'./media/images/witcher.png', name: 'Ведьмак - дикая охота'},
                {id:1, img:'./media/images/gow.png', name: 'God of war'},
                {id:2, img:'./media/images/skyrim.png', name: 'Skyrim'},
                {id:3, img:'./media/images/dead_cells.png', name: 'Dead Cells'},
                {id:4, img:'./media/images/hades.png', name: 'Hades'},
            ],
            products:[
                {id:0, img:'./media/images/witcher.png', genre: ['открытый мир', 'Все'], name: 'Ведьмак - дикая охота', yearOfCreation: 2015, price: 2000, rating:8.6,description:'The Witcher 3: Wild Hunt -  компьютерная ролевая игра по мотивам серии романов «Ведьмак» польского писателя Анджея Сапковского, продолжение игр «Ведьмак» и «Ведьмак 2: Убийцы королей». Заключительная часть трилогии. Игроку вновь отводится роль Геральта, ведьмака, убивающего монстров. После событий второй части Геральт возвращает утраченные воспоминания, и оказывается на перепутье. В Северных королевствах бушует война, а неожиданно вернувшаяся Йеннифэр, подруга Геральта, просит его помочь с поисками Цириллы, Дитя-неожиданности, которая может остановить пришествие Дикой Охоты. Геральт отправляется в опасное путешествие по разоренным войной землям, чтобы найти Цири и сокрушить Дикую Охоту раз и навсегда.'},
                {id:1, img:'./media/images/gow.png', genre: ['открытый мир', 'Все'],name: 'God of war', yearOfCreation: 2018, price: 3000, rating:8.9,description:'Творческий директор студии Santa Monica Кори Барлог представляет новую God of War. Выбравшись из тени богов, Кратос обязан приспособиться к жизни в незнакомых землях с их неожиданными опасностями, а еще стать хорошим отцом. Вместе со своим сыном Атреем он отправится в очень личное путешествие по суровым скандинавским пустошам, где им вдвоем предстоит сражаться с разнообразным злом.'},
                {id:2, img:'./media/images/skyrim.png', genre: ['открытый мир', 'Все'], name: 'Skyrim', yearOfCreation: 2011, price: 2500, rating:8.8,description:'The Elder Scrolls V: Skyrim - это приключенческая ролевая игра, пятая часть в серии The Elder Scrolls, с огромным открытым миром, который с самого начала полностью доступен для исследования. Игрокам предстоит выступить в роли Довакина, Драконорожденного, который появляется в провинции Скайрим аккурат во время возвращения легендарных драконов, которые, по преданию, собираются разрушить мир. Довакину предстоит преодолеть множество трудностей на пути к своей цели - остановить драконьего повелителя Алдуина, который готовится обрушить свою ярость на весь мир. Игроки вольны выбирать, проходить им сюжетную линию, заняться побочными заданиями или же просто бродить по миру. В Skyrim нет четкого понятия "класс персонажа" - протагониста можно развивать, как понравится игроку, создавая всевозможные комбинации из стандартных "ролевых" классов.'},
                {id:3, img:'./media/images/dead_cells.png', genre: ['Roguelike','Метроидвания', 'Все'], name: 'Dead Cells', yearOfCreation: 2017, price: 1000, rating: 7.5,description:'Dead Cells - это платформер-"рогалик" с элементами "метроидвании", в котором игроки пробираются через мрачный фэнтезийный мир, в котором отсутствуют безопасные зоны и точки сохранения. Вместо постоянного бэктрекинга локаций здесь смерть персонажа, после которой, впрочем, вы сохраняете знания о локациях, и можете быстро обнаружить необходимые вам проходы и секретные места. После смерти у игрока остаются найденные (и сданные торговцу) рецепты, "вечные" руны, а также разное оружие и приспособления, если таковые были приобретены. После смерти мир Dead Cells меняется, заново выстраивая абсолютно все проходы, и воскрешая всех противников - включая смертоносных боссов. '},
                {id:4, img:'./media/images/hades.png', genre: ['Roguelike', 'Все'], name: 'Hades', yearOfCreation: 2019, price: 750, rating: 7.2, description:'Hades - это "рогалик" в сеттинге Древней Греции, главным героем которого является молодой сын правителя царства мертвых - Аида. В один прекрасный день парень решил сбежать во внешний мир, для чего ему предстоит пройти через бесконечные пустоши Тартара, кишащие злобными тварями, и постоянно погибать от их клыков и ударов.'},
                {id:5, img:'./media/images/hollow_knight.png', genre: ['Метроидвания', 'Все'], name: 'Hollow Knight', yearOfCreation: 2017, price: 1500, rating: 9.1,description: 'Hollow Knight - это "метроидвания", в которой игроки берут на себя роль загадочного Полого Рыцаря, чей путь лежит в глубины древнего королевства Халлоунест. Путешествуя по развалинам королевства, игроки узнают больше о прошлом этих земель, сражаются с многочисленными и крайне опасными противниками, а также совершенствуют свои боевые навыки. После выхода игра получила три бесплатных дополнения, расширяющих и без того немаленький игровой мир - Hidden Dreams, The Grimm Troupe и Godmaster. Каждое дополнение предлагает новых боссов, новые локации, NPC и амулеты для главного героя, которые, впрочем, еще нужно заслужить - просто так в Халлоунесте ничего не бывает. '},
                {id:6, img:'./media/images/ultimate_chicken_horse.png', genre: ['Мультиплеер', 'Все'],name: 'Ultimate chiken horse', yearOfCreation: 2016, price: 500, rating: 7.0,description: 'Ultimate Chicken Horse - это командный приключенческий платформер-симулятор, где игрок может выступить в роли...лошади, вороны, енота, хамелеона или попугая и участвовать в забеге на длинные дистанции. '},
                {id:7, img:'./media/images/etg.png', genre: ['Мультиплеер', 'Roguelike', 'Все'],name: 'Enter the gungeon', yearOfCreation: 2016, price: 1200, rating: 8.3,description: 'Enter the Gungeon - это рисованный 2D-пиксельный шутер с видом сверху. Игровой мир формируется случайным образом: созданные вручную отдельные комнаты образовывают процедурно генерируемые подземелья, которые игроку и предстоит исследовать.'},
            ],
            filterCategories:[
                {id: 0, name: 'Все'},
                {id: 1, name: 'открытый мир'},
                {id: 2, name: 'Roguelike'},
                {id: 3, name: 'Метроидвания'},
                {id: 4, name: 'Мультиплеер'},
            ],
            currentProduct: {},
            filterTypeIndex: 0,
            sortType: 'цене',
            sortMenuEnable: false,
            basketIdCount: 0,
            messageWindowEnable: false,
            messageWindowText: 'Вы добавили товар!',
            messageColor: 'rgb(240, 157, 164)',
            users:[
                {id:0, login: 'ak', password: '123', email: 'ak@mail.ru', isAdmin: true, name: 'Сослан', surname: 'Кубулов', patronymic: 'Георгиевич', basket:[], orders:[]},
                {id:1, login: 'qw', password: '123', email: 'qwerty@mail.ru', isAdmin: false, name: 'Масленников', surname: 'Семён', patronymic: 'Даниилович', basket:[], orders:[]},
                {id:2, login: 'zx', password: '321', email: 'zx@mail.ru', isAdmin: false, name: 'Воронина', surname: 'Милана', patronymic: 'Елисеевна', basket:[], orders:[]},
            ],
            orders:[],
            orderPageTitle: 'Заказ оформлен!',
            currentUser: null,
            whichUserOrders: null,
            currentOrderIndex: 0,
            registrationLoginField:'',
            registrationEmailField:'',
            registrationPasswordField:'',
            registrationPasswordRepeatField:'',
            registrationNameField:'',
            registrationSurnameField:'',
            registrationPatronymicField:'',
            registrationCheckBox: false,
            loginLoginField:'',
            loginPasswordField:'',
        }
    },
    methods:{
        ChangePage(page){ // смена страницы
            this.lastPage = this.currentPage
            this.currentPage = page
            this.Massege('Вы перешли на страницу: ' + this.currentPage)
        },
        ArraySum(arr, key){
            let sum = 0
            arr.forEach(element => sum += element[key])
            return sum
        },
        ArrayMax(arr, key){
            let max = 0;
            arr.forEach(elem => {
                if(elem[key] > max) max = elem[key]
            });
            return max
        },
        DetailEnable(id){ //включение детальной
            this.currentProduct = this.products.find(item => item.id === id)
            this.currentPage = 'Детальный обзор'
        },
        ProductsFilter(arr){ // фильтрация продуктов
            if(this.filterTypeIndex === 0) return arr
            else if(this.filterTypeIndex !== 0) return arr.filter(item => item.genre.includes(this.filterCategories[this.filterTypeIndex].name))
        },
        ProductsSort(arr){ // сортировка продуктов
            if(this.sortType === 'цене') return arr.sort((a,b) => a.price - b.price)
            else if(this.sortType === 'наименованию') return arr.sort((a,b) => a.name > b.name ? 1 : -1)
            else if(this.sortType === 'году производства') return arr.sort((a,b) => a.yearOfCreation - b.yearOfCreation)
        },
        BasketAdd(product){ // добавление в корзину
            if(!this.currentUser)
            {
                this.ChangePage('Авторизация')
                this.Massege('Чтобы добавить товар в корзину, войдите!', true)
                return
            }

            if(this.currentUser.basket.includes(product))
            {
                this.Massege('Товар уже есть в корзине!')
                return
            }

            if(this.currentUser.orders.find(order => order.content.includes(product)))
            {
                this.Massege('Товар уже есть в заказах!')
                return
            }

            this.currentUser.basket.push(product)
            this.Massege('Вы добавили товар!')
        },
        BasketDelete(product){ // удаление из корзины
            this.currentUser.basket = this.currentUser.basket.filter(item => item != product)
            this.Massege('Вы удалили товар!')
        },
        Bye(){
            this.currentUser.orders.push({id: this.ArrayMax(this.currentUser.orders, 'id')+1, userId: this.currentUser.id, content: this.currentUser.basket, status: 'на рассмотрении'})
            this.currentUser.basket = []
            this.OrderReveal(this.currentUser, this.currentUser.orders.length)
        },
        OrderReveal(user, index){
            this.currentOrderIndex = index
            this.whichUserOrders = user
            this.ChangePage('Оформление заказа')
        },
        Massege(text, isError = false){
            if(isError) this.messageColor = 'brown'
            else this.messageColor = 'rgb(240, 157, 164)'
            this.messageWindowText = text
            this.messageWindowEnable = true
        },
        OnLogin(){
            if(this.loginLoginField === '' || this.loginPasswordField === '') 
            {
                this.Massege('Вы не заполнили одно или несколько полей!', true)
                return
            }

            let user = this.users.find(user => user.login === this.loginLoginField)
            
            if(user) {
                if(user.password === this.loginPasswordField) this.SingIn(user)
            }
            else this.Massege('Не правильный пароль или логин!', true)
        },
        SingIn(user){
            this.CleanFields()
            this.currentUser = user
            this.whichUserOrders = user
            this.ChangePage('Личный кабинет')
        },
        OnRegistration(){
            let newUser = {
                id: this.ArrayMax(this.users, 'id')+1,
                login: this.registrationLoginField,
                password: this.registrationPasswordField,
                email: this.registrationEmailField,
                isAdmin: false,
                name: this.registrationNameField,
                surname: this.registrationSurnameField,
                patronymic: this.registrationPatronymicField,
                basket: []
            }
            if(newUser.login === '' || newUser.password === '' || newUser.email === '' || newUser.name === '' || newUser.surname === '' || newUser.patronymic === '') 
            {
                this.Massege('Вы не заполнили одно или несколько полей!', true)
                return
            }

            if(!this.registrationCheckBox)
            {
                this.Massege('Для продолжения Нужно соглашение с правилами использования!', true)
                return
            }

            if(this.users.find(user => user.email === newUser.email))
            {
                this.Massege('На данную почту уже зарегистрирован пользователь!', true)
                return
            }

            if(this.users.find(user => user.login === newUser.login))
            {
                this.Massege('Уже существует пользователь с таким ником, придумайте другой', true)
                return
            }

            if(newUser.password !== this.registrationPasswordRepeatField)
            {
                this.Massege('Пароли не совпадают!', true)
                this.registrationPasswordField = ''
                this.registrationPasswordRepeatField = ''
                return
            }

            this.users.push(newUser)

            this.SingIn(this.users[this.users.length-1])
        },
        LogOut(){
            this.ChangePage('О нас')
            this.currentUser = null
        },
        CleanFields(){
            this.registrationLoginField = ''
            this.registrationEmailField = ''
            this.registrationPasswordField = ''
            this.registrationPasswordRepeatField = ''
            this.registrationNameField = ''
            this.registrationSurnameField = ''
            this.registrationPatronymicField = ''
            this.registrationCheckBox = false
            this.loginLoginField = ''
            this.loginPasswordField = ''
        },
        GetCountOfOrder(order){
            if((order.content.length > 4 && order.content.length < 21) || (order.content.length % 10 > 4 && order.content.length % 10 <= 9)) return order.content.length + " Игр"
            else if(order.content.length % 10 > 1 && order.content.length % 10 < 5) return order.content.length + " Игры"
            else if(order.content.length % 10 == 1) return order.content.length + " Игра"
        }
    }
}

Vue.createApp(app).mount('#app')