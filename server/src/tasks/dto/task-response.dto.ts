import { ApiProperty } from '@nestjs/swagger';

export class TaskResponseDto {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;
}
