const express = require('express')
const router = express.Router()

const TaskController = require('../controller/TaskController')
const TaskValidation = require('../middlewares/TaskValidation')

//criar
router.post('/', TaskValidation, TaskController.create)
//atualizar
router.put('/:id', TaskValidation, TaskController.update)
//deletar tarefa
router.delete('/:id', TaskController.delete)
//atualizar status da tarefa
router.put('/:id/:done', TaskController.done)


//rotas get
//listar tarefas por macAddress
router.get('/filter/all/:macaddress', TaskController.all)
//listar tarefa por id
router.get('/:id/:macaddress', TaskController.show)
//tarefas atrasadas
router.get('/filter/late/:macaddress', TaskController.late)
//tarefas do dia
router.get('/filter/today/:macaddress', TaskController.today)
//tarefas da semana
router.get('/filter/week/:macaddress', TaskController.week)
//tarefas do mês
router.get('/filter/month/:macaddress', TaskController.month)
//tarefas do ano
router.get('/filter/year/:macaddress', TaskController.year)

module.exports = router
