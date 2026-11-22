import { BadRequestException, Injectable } from '@nestjs/common';
import { CriarAgendamentoDto } from './dto/criar-agendamento.dto';
import { AtualizarAgendamentoDto } from './dto/atualizar-agendamento.dto';
import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agendamentos } from './agendamento.entity';
@Injectable()
export class AgendamentosService {
  constructor(
    @InjectRepository(Agendamentos)
    private agendamentoRepository: Repository<Agendamentos>,
  ) {}
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
    return this.agendamentoRepository.find();
  }
  async buscar(id: string) {
    const busca = await this.agendamentoRepository.findOneBy({
      id: Number(id),
    });

    if (!busca) {
      throw new NotFoundException('Agendamento não encontrado');
    }

    return busca;
  }
  criar(dados: CriarAgendamentoDto) {
    return this.agendamentoRepository.save(dados);
  }

  async atualizar(id: string, dados: AtualizarAgendamentoDto) {
    const registro = await this.agendamentoRepository.preload({
      id: Number(id),
      ...dados,
    });

    if (!registro) {
      throw new NotFoundException('Registro não encontrado');
    }

    return this.agendamentoRepository.save(registro);
  }
  async deletar(id: string) {
    const registro = await this.agendamentoRepository.findOneBy({
      id: Number(id),
    });

    if (!registro) {
      throw new NotFoundException('Agendamento não encontrado');
    }

    await this.agendamentoRepository.remove(registro);

    return registro;
  }
}
