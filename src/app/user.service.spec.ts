import {TestBed, inject} from '@angular/core/testing';

import {UserService} from './user.service';
import {HttpModule} from '@angular/http';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [UserService]
    });
  });
  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should get all users', (done) => {
    const userService = TestBed.get(UserService);
    userService
      .getUsers()
      .then((resp) => {
        const users = resp.json();
        expect(users.length).toEqual(10);
        expect(Array.isArray(users)).toBeTruthy();
        done();
      })
      .catch(done.fail);
  });
  it('id must be greater than zero', (done) => {
    const userService = TestBed.get(UserService);
    userService
      .getUsers()
      .then((resp) => {
        const users = resp.json();       
        expect(users[0].id).toBeGreaterThanOrEqual(0);
        expect(Array.isArray(users)).toBeTruthy();
        done();
      })
      .catch(done.fail);
  });

  it('Comparing id of 1 and 2', (done) => {
    const userService = TestBed.get(UserService);
    userService
      .getUsers()
      .then((resp) => {
        const users = resp.json();       
        expect(users[1].id).toBeLessThan(users[5].id);
        expect(Array.isArray(users)).toBeTruthy();
        done();
      })
      .catch(done.fail);
  });
  it('email length must  be greater than 5 characters', (done) => {
    const userService = TestBed.get(UserService);
    userService
      .getUsers()
      .then((resp) => {
        const users = resp.json();  
        for(var i=0; i<users.length; i++) {
          expect(users[i].email.length).toBeGreaterThan(0);
        }
        expect(Array.isArray(users)).toBeTruthy();
        done();
      })
      .catch(done.fail);
  });

  it('to test id 2 for person name is expected or not', (done) => {
    const userService = TestBed.get(UserService);
    userService
      .getUsers()
      .then((resp) => {
        const users = resp.json();  
        for(var i=0; i<users.length; i++) {
          expect(users[1].name).toEqual('Ervin Howell');
        }
        expect(Array.isArray(users)).toBeTruthy();
        done();
      })
      .catch(done.fail);
  });
});