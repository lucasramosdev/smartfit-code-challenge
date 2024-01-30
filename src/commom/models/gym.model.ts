export interface GymModel {
  id: number,
  titulo: string,
  conteudo: string,
  aberto: boolean,
  mascara: string,
  toalha: string,
  bebedouro: string,
  vestiario: string,
  agendamentos: Agendamento[]
}

export interface Agendamento {
  dias_semana: string,
  horario: string,
}