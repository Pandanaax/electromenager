import { Subject } from 'rxjs';

export class AppareilService {

  appareilSubject = new Subject<any[]>(); 
  
  
  private appareils = [
        {
          id:1,
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
          id:2,
          name: 'Télévision',
          status: 'allumé'
        },
        {
          id:3,
          name : 'Ordinateur',
          status: 'éteint'
        }
      ]

    emitAppareilSubject() {
      this.appareilSubject.next(this.appareils.slice());
    }

    getAppareilById(id:number){
      const appareils = this.appareils.find(
        (appareilObject) => {
          return appareilObject.id === id;
        }
      );
      return appareils;
    }

    switchOnAll() {
          for(let appareils of this.appareils){
              appareils.status = 'allumé'
            }
            this.emitAppareilSubject();
}
    switchOffAll() {
        for(let appareils of this.appareils){
            appareils.status = 'éteint'
        }
        this.emitAppareilSubject();
    }
    switchOnOne(index: number){
        this.appareils[index].status='allumé';
        this.emitAppareilSubject();
    }
    switchOffOne(index: number){
        this.appareils[index].status='éteint';
        this.emitAppareilSubject();
    }
}