/* eslint-disable no-undef */
// server/messages-ready.js

/** 
 * Cada item representa uma telemensagem pronta.
 * Troque o campo "arquivo" para o nome REAL do .mp3 dentro de server/audios/pronto
 */
const readyMessages = [
  {
    id: 'amor-1',
    categoria: 'amor',
    titulo: 'Declaração Romântica - Voz Feminina',
    descricao: 'Mensagem suave e romântica para surpreender quem você ama.',
    voz: 'Feminina',
    duracao: '2:30',
    arquivo: 'amor01.mp3',
    destaque: true
  },
  {
    id: 'amor-2',
    categoria: 'amor',
    titulo: 'Eu Escolheria Você de Novo - Voz Masculina',
    descricao: 'Texto emocionante com trilha suave, ideal para datas especiais.',
    voz: 'Masculina',
    duracao: '2:45',
    arquivo: 'amor02.mp3'
  },
  {
    id: 'aniversario-1',
    categoria: 'aniversario',
    titulo: 'Aniversário Carinhoso - Voz Feminina',
    descricao: 'Mensagem alegre e afetuosa para aniversários inesquecíveis.',
    voz: 'Feminina',
    duracao: '2:20',
    arquivo: 'aniversario01.mp3'
  },
  {
    id: 'maes-1',
    categoria: 'maes',
    titulo: 'Mãe, Meu Porto Seguro',
    descricao: 'Homenagem emocionante para o coração de mãe.',
    voz: 'Masculina',
    duracao: '3:00',
    arquivo: 'maes01.mp3'
  },
  {
    id: 'pais-1',
    categoria: 'pais',
    titulo: 'Pai, Meu Exemplo',
    descricao: 'Mensagem de gratidão e reconhecimento.',
    voz: 'Masculina',
    duracao: '2:40',
    arquivo: 'pais01.mp3'
  },
  {
    id: 'infantil-1',
    categoria: 'infantil',
    titulo: 'Parabéns Criançada',
    descricao: 'Mensagem infantil com clima de festa e alegria.',
    voz: 'Feminina',
    duracao: '2:10',
    arquivo: 'infantil01.mp3'
  }
]

module.exports = readyMessages
