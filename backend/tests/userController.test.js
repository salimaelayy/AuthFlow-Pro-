const usercontroller = require('../controllers/UserController');

describe('User Controller Tests', () => {
  describe('register', () => {
    it('should register a new user', async () => {
      const req = {
        body: {
          username: 'testuser',
          email: 'test@example.com',
          password: 'password123',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        cookie: jest.fn(),
      };

      await usercontroller.register(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
        accessToken: expect.any(String),
        id: expect.any(String),
        data: expect.any(Object),
        message: 'New user created successfully',
      }));
    }, 10000); // Timeout increased to 10 seconds

    it('should return 400 if required fields are missing', async () => {
      const req = {
        body: {},
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await usercontroller.register(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: 'Please provide valid information' });
    });

    // Add more test cases as needed
  });

  describe('readall', () => {
    it('should return all users', async () => {
      const req = {};
      const res = {
        json: jest.fn(),
      };

      await usercontroller.readall(req, res);

      expect(res.json).toHaveBeenCalled();
    });

  });
});


//   describe('readbyid', () => {
//     // Write tests for readbyid function
//   });

//   describe('readbyname', () => {
//     // Write tests for readbyname function
//   });

//   describe('updatebyid', () => {
//     // Write tests for updatebyid function
//   });

//   describe('deletebyid', () => {
//     // Write tests for deletebyid function
//   });

//   describe('assignRole', () => {
//     // Write tests for assignRole function
//   });

//   describe('removeRole', () => {
//     // Write tests for removeRole function
//   });
// });

