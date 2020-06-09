import { ApiProperty } from "@nestjs/swagger";

export class UserRequest {
  @ApiProperty({
    description: "Username",
    example: "rod",
  })
  username: string;

  @ApiProperty({
    description: "Password",
    example: "Passw0rd",
  })
  password: string;
}
