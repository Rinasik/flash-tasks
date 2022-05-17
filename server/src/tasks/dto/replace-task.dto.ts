import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ReplaceTaskRequestPayloadDto {
  @ApiProperty({ required: true })
  @IsString()
  fromId: string;

  @ApiProperty({ required: true })
  @IsString()
  toId: string;

  @ApiProperty({ required: true })
  @IsString()
  taskId: string;
}
