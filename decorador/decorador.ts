interface Component {
    send(email: IEmail): IEmail
}

interface IEmail {
    name: string
    email: string
    subject: string
}

class SendGmailMessage implements Component {
    send(email: IEmail): IEmail {
        console.log(`Send Gmail message to :${email.email}`);
        return email
    }

}
class Decorator implements Component {
    constructor(private component: Component) { }
    send(email: IEmail): IEmail {
        return this.component.send(email)
    }
}

class SendFacebookMessageDecorator extends Decorator {
    send(email: IEmail): IEmail {
        super.send(email)
        console.log(`Send facebook message to: ${email.email}`);
        return email
    }
}

class SendSlackMessageDecorator extends Decorator {

    send(email: IEmail): IEmail {
        super.send(email)
        console.log(`Send slack message to: ${email.email}`);
        return email
    }

}


const email: IEmail = {
    email: "seguragjj25@gmail.com",
    name: "jhonatan",
    subject: "Greeting"
}
const emailMessage = new SendGmailMessage()

console.log("[Result]");
emailMessage.send(email)

const facebookMessage = new SendFacebookMessageDecorator(emailMessage)
console.log("[Result]");
facebookMessage.send(email)

const slackMessage = new SendSlackMessageDecorator(facebookMessage)
console.log("[Result]");
slackMessage.send(email)

