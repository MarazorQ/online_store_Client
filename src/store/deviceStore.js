import { makeAutoObservable } from "mobx"

export default class deviceStore{
    //вызывается при создании объекта данного класса 
    constructor(){
        this._types = [
            {id: 1, name: 'Холодосы'},
            {id: 2, name: 'Ноуты'},
            {id: 3, name: 'Телефоны'},
            {id: 4, name: 'Наушники'},
            {id: 5, name: 'Планшеты'},
            {id: 6, name: 'Аксесуары'},
            {id: 7, name: 'Часы'}
        ]
        this._brands = [
            {id: 1, name: 'apple'},
            {id: 2, name: 'sony'},
            {id: 3, name: 'sasung'}
        ]
        this._devices = [
            {id: 1, name: 'apple', price: 5000, rating: 5, img: ''},
            {id: 2, name: 'apple2', price: 50200, rating: 3, img: ''},
            {id: 3, name: 'apple3', price: 50300, rating: 2, img: ''}
        ]
        this._selectedType = {}
        makeAutoObservable(this)// теперь mobx следит за изменениями этих переменных и при изменении будет перерендер
    }

    //action (функция которая изменяет состояние)
    setTypes(bool){
        this._types = bool
    }
    setBrands(bool){
        this._brands = bool
    }
    setDevices(bool){
        this._devices = bool
    }
    setSelectedType(type){
        this._selectedType = type
    }
    //geter(чтобы получать переменные из нашего состояния), так называемые компьютед функции, они вызываются только в том случае, если переменная внутри была изменена(своего рода оптимизация)
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
    get selectedType(){
        return this._selectedType
    }
}

