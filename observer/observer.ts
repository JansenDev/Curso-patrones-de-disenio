interface IObserver<T> {
    update(value: T): void
}

interface ISubject<T> {
    observers: IObserver<T>[];
    suscribe(observer: IObserver<T>): void
    unsuscribe(observer: IObserver<T>): void
    notify(value: T): void
}


class Subject<T> implements ISubject<T> {

    constructor(public observers: IObserver<T>[] = []) { }

    suscribe(observer: IObserver<T>): void {
        const isExist = this.observers.includes(observer)

        if (isExist) return console.log("[SUBJECT]: Observer already exists");

        this.observers.push(observer)
        console.log("[SUBJECT]: Observador suscrito ")
    }
    unsuscribe(observer: IObserver<T>): void {
        const indexObserver = this.observers.indexOf(observer);
        const isExists = indexObserver !== -1;

        if (!isExists) return console.log("[SUBJECT]: Not found observer");

        this.observers.splice(indexObserver, 1);
        console.log("[SUBJECT]: Observador desuscrito");
    }
    notify(value: T): void {
        console.log("[SUBJECT]: Notificando a observadores");
        this.observers.forEach(observer => observer.update(value))
    }
}

class Observer<T> implements IObserver<T>{
    constructor(public fn: (value: T) => void) { }
    update(value: T): void {
        this.fn(value)
    }
}

const subject = new Subject<Number>()
const observer1 = new Observer<Number>((d => console.log("data numero1: ", d)));
const observer2 = new Observer<Number>((d => console.log("data numero2: ", d)));
const observer3= new Observer<Number>((d => console.log("data numero3: ", d)));

subject.suscribe(observer1)
subject.suscribe(observer1)
subject.suscribe(observer2)
subject.unsuscribe(observer3)
subject.unsuscribe(observer2)
subject.notify(1234)