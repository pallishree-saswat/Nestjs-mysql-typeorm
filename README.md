

nest new project-name
npm install --save @nestjs/typeorm typeorm@0.2 mysql2

nest generate module users
nest g controller users/user

npm i --save @nestjs/config

nest g resource super-admin 
includes all in one folder( module, controller,service,...
) for creating apis