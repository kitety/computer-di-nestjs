import { Controller, Get } from '@nestjs/common';
import { DiskService } from 'src/disk/disk.service';
import { CpuService } from '../cpu/cpu.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService,
  ) {}

  @Get()
  run() {
    return [this.cpuService.compute(1, 2), this.diskService.getData()];
  }
}
