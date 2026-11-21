import { Injectable } from '@nestjs/common';
import { CriarAgendamentoDto } from './dto/criar-agendamento.dto';
import { AtualizarAgendamentoDto } from './dto/atualizar-agendamento.dto';

@Injectable()
export class AgendamentosService {
  private agendamentos = [
    {
      id: 1,
      nome: 'Chicó',
      idade: 3,
      especie: 'Cachorro',
      tutor: 'João',
    },
    {
      id: 2,
      nome: 'Zod',
      idade: 2,
      especie: 'Gato',
      tutor: 'Jacó',
    },
  ];

  listar() {
    return this.agendamentos;
  }
  buscar(id: string) {
    return this.agendamentos.find(
      (agendamento) => agendamento.id === Number(id),
    );
  }
  criar(dados: CriarAgendamentoDto) {
    const novoRegistro = {
      id: this.agendamentos.length + 1,
      ...dados,
    };

    this.agendamentos.push(novoRegistro);

    return novoRegistro;
  }

  atualizar(id: string, dados: AtualizarAgendamentoDto) {
    const registro = this.agendamentos.find(
      (agendamento) => agendamento.id === Number(id),
    );

    if (!registro) {
      throw new Error('Registro não encontrado');
    }

    Object.assign(registro, dados);

    return registro;
  }
  deletar(id: string) {
    const novoRegistroo = this.agendamentos.find(
      (agendamento) => agendamento.id == Number(id),
    );

    if (!novoRegistroo) {
      throw new Error('Registro não encontrado');
    }

    const apagar = this.agendamentos.filter(
      (agendamento) => agendamento.id !== Number(id),
    );

    this.agendamentos = apagar;

    return novoRegistroo;
  }
}
