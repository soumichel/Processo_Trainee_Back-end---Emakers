import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Biblioteca from 'App/Models/Biblioteca'

export default class BibliotecasController {

    // Método que cadastra uma determinada Biblioteca com id, endereço, site e telefone
    public async store({request, response}: HttpContextContract) {
        const body = request.body()
        const biblioteca = await Biblioteca.create(body)

        response.status(201)

        return {
            message: 'Biblioteca cadastrada com sucesso!',
            data: biblioteca,
        }
    }

    // Método que exibe todas as Bibliotecas cadastradas
    public async index() {
        const biblioteca = await Biblioteca.all()

        return {
            data: biblioteca,
        }
    }

    // Método que busca um id e exibe a respectiva Biblioteca relacionada ao id
    public async show({params}: HttpContextContract) {
        const biblioteca = await Biblioteca.findOrFail(params.id)

        return {
            data: biblioteca,
        }
    }

    // Método que busca um id e deleta a respectiva Biblioteca relacionada ao id
    public async destroy({params}: HttpContextContract) {
        const biblioteca = await Biblioteca.findOrFail(params.id)

        await biblioteca.delete()

        return {
            message: 'Biblioteca removida com sucesso!',
            data: biblioteca,
        }
    }

    // Método que busca um id e atualiza os dados da respectiva Biblioteca relacionada ao id
    public async update({params, request}: HttpContextContract) {
        const body = request.body()
        const biblioteca = await Biblioteca.findOrFail(params.id)

        biblioteca.endereco = body.endereco
        biblioteca.site = body.site
        biblioteca.telefone = body.telefone

        await biblioteca.save()

        return {
            message: 'Biblioteca atualizada com sucesso!',
            data: biblioteca,
        }
    }
}
