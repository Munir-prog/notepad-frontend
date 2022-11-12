import {makeAutoObservable} from "mobx";

export default class NoteStore {

    constructor() {
        this._notes = [
            {id: 1, tittle: 'tittle1', text: 'text1', updatedAt: 'update1'},
            {id: 2, tittle: 'tittle2', text: 'text2', updatedAt: 'update2'},
            {id: 3, tittle: 'tittle3', text: 'text3', updatedAt: 'update3'},
            {id: 4, tittle: 'tittle4', text: 'text4', updatedAt: 'update4'}
        ];
        makeAutoObservable(this)
    }

    setNotes(notes) {
        this._notes = notes;
    }

    get notes() {
        return this._notes;
    }

}
