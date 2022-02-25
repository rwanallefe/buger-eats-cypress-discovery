import signupPage from '../pages/signupPage'
import signupFactory from '../factories/SignupFactory'

describe('Register', () => {

    // beforeEach(function () {
    //     cy.fixture('deliver').then((d) => {
    //         this.deliver = d
    //     })
    // })

    it('User should be a deliver', function () {

        var deliver = signupFactory.deliver();

        signupPage.go();
        signupPage.fillForm(deliver);
        signupPage.submit();

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';
        signupPage.modalContentShouldBe(expectedMessage);
    });

    it('Invalid CPF', function () {

        var deliver = signupFactory.deliver();

        deliver.cpf = '000000141aa';

        signupPage.go();
        signupPage.fillForm(deliver);
        signupPage.submit();
        signupPage.alertMessageShouldBe('Oops! CPF inválido');
    });

    it('Invalid email', function () {

        var deliver = signupFactory.deliver();

        deliver.email = 'user.com.br';

        signupPage.go();
        signupPage.fillForm(deliver);
        signupPage.submit();
        signupPage.alertMessageShouldBe('Oops! Email com formato inválido.');
    });

    context('Require fields', function () {
        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'cep', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'method_deliver', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function () {
            signupPage.go();
            signupPage.submit();
        })

        messages.forEach(function (msg) {
            it(`${msg.field} is required`, function () {
                signupPage.alertMessageShouldBe(msg.output)
            })
        })
    })

    // it('Required fields', function () {
    //     signup.go();
    //     signup.submit();
    //     signup.alertMessageShouldBe('É necessário informar o nome');
    //     signup.alertMessageShouldBe('É necessário informar o CPF');
    //     signup.alertMessageShouldBe('É necessário informar o email');
    //     signup.alertMessageShouldBe('É necessário informar o CEP');
    //     signup.alertMessageShouldBe('É necessário informar o número do endereço');
    //     signup.alertMessageShouldBe('Selecione o método de entrega');
    //     signup.alertMessageShouldBe('Adicione uma foto da sua CNH');
    // });
});
