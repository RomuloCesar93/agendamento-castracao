import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

import { AgendamentosService } from './agendamentos.service';
import { CriarAgendamentoDto } from './dto/criar-agendamento.dto';
import { AtualizarAgendamentoDto } from './dto/atualizar-agendamento.dto';

@Controller('agendamentos')
export class AgendamentosController {
  constructor(private readonly agendamentoService: AgendamentosService) {}

  @Get()
  listar() {
    return this.agendamentoService.listar();
  }

  @Get(':id')
  buscar(@Param('id') id: string) {
    return this.agendamentoService.buscar(id);
  }

  @Post()
  criar(@Body() dados: CriarAgendamentoDto) {
    return this.agendamentoService.criar(dados);
  }

  @Put(':id')
  atualizar(@Param('id') id: string, @Body() dados: AtualizarAgendamentoDto) {
    return this.agendamentoService.atualizar(id, dados);
  }

  @Delete(':id')
  deletar(@Param('id') id: string) {
    return this.agendamentoService.deletar(id);
  }
}
