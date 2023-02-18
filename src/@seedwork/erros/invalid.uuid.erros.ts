export default class InvalidUuidErros extends Error{
    constructor(menssage?: string){
        super(menssage || 'Id must');
        this.name = 'InvalidUuidError';
    }
}