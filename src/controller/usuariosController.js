const { prisma } = require("../services");





async function buscarUsuarios() {
    try {
        return await prisma.usuarios.findMany();

    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }
    }


    // return await executarSQL("SELECT * FROM usuarios;");

}

async function buscarUmUsuario(id) {
    try {
        return await prisma.usuarios.findFirst({
            where: {
                usuario_id: Number(id)
            }

        });
    } catch (error) {
        return {
            tipo: "error",
            mnsagem: error.message
        }
    }
}


async function criarUsuario(dados) {

    try {
        return await prisma.usuarios.create({
            data: dados
        })
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }
    }
    // return await executarSQL(`INSERT INTO usuarios (usuario_nome, usuario_preco, usuario_desconto, usuario_imagem, marca_id, categoria_id) VALUES ('${dados.usuario_nome}', ${dados.usuario_preco}, ${dados.usuario_desconto}, '${dados.usuario_imagem}', ${dados.marca_id}, ${dados.categoria_id})`)
}

async function editarUsuario(id, dados) {
    try {
        return await prisma.usuarios.update({
            where: { usuario_id: Number(id) },
            data: dados
        })
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }
    }


}


async function apagarUsuario(id) {
    try {
        return await prisma.usuarios.delete({
            where: {
                usuario_id: Number(id)
            }

        });
    } catch (error) {
        return {
            tipo: "error",
            mnsagem: error.message
        }
    }

    // return await executarSQL(`DELETE FROM usuarios WHERE usuario_id = ${id}`)

}


module.exports = {
    buscarUsuarios,
    buscarUmUsuario,
    criarUsuario,
    apagarUsuario,
    editarUsuario
}