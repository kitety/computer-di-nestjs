import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  // 需要导出，不然是私有的
  exports: [PowerService],
})
export class PowerModule {}
