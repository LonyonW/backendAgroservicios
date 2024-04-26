export class CreateUserDto {
  firstname_user: string;
  lastname_user: string;
  email_user: string;
  phone_user?: string; // ? debido a que es opcional y los datos no se guardan al momento del registro
  image_user?: string; // ? debido a que es opcional y los datos no se guardan al momento del registro
  password_user: string;
}
