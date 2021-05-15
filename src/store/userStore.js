import { makeAutoObservable} from "mobx"

export default class userStore{
    //вызывается при создании объекта данного класса 
    constructor(){
        this._isAuth = true
        this._user = {}
        makeAutoObservable(this)// теперь mobx следит за изменениями этих переменных и при изменении будет перерендер
    }

    //action (функция которая изменяет состояние)
    setIsAuth(bool){
        this._isAuth = bool
    }
    setUser(bool){
        this._user = bool
    }
    //geter(чтобы получать переменные из нашего состояния), так называемые компьютед функции, они вызываются только в том случае, если переменная внутри была изменена(своего рода оптимизация)
    get isAuth(){
        return this._isAuth
    }
    get user(){
        return this._user
    }
}

