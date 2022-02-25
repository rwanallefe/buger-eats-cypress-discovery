var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.name.firstName();
        var lastName = faker.name.lastName();

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '13999999999',
            address: {
                cep: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                complement: 'Apto 147',
                neighborhood: 'Itaim Bibi',
                city_uf: 'São Paulo/SP'
            },
            method_delivery: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}