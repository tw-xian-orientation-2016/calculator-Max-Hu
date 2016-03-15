var supertest = require("supertest");

var should = require("should");

var server = supertest.agent("http://localhost:3000");


describe("task test",function(){


    it("should return correct addition result",function(done){

        server
            .post('/api/addition')
            .send({number1 : 10, number2 : 20})
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
                res.text.should.equal('30');
                done();
            });
    });

    it("should return correct subtraction result",function(done){

        server
            .post('/api/subtraction')
            .send({number1 : 10, number2 : 20})
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
                res.text.should.equal('-10');
                done();
            });
    });

    it("should return correct multiplication result",function(done){

        server
            .post('/api/multiplication')
            .send({number1 : 10, number2 : 20})
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
                res.text.should.equal('200');
                done();
            });
    });

    it("should return correct division result",function(done){

        server
            .post('/api/division')
            .send({number1 : 10, number2 : 20})
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
                res.text.should.equal('0.5');
                done();
            });
    });

    it("should return correct percent result",function(done){

        server
            .post('/api/percent')
            .send({number1 : 10})
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
                res.text.should.equal('0.1');
                done();
            });
    });

    it("should return correct reserve result",function(done){

        server
            .post('/api/reserve')
            .send({number1 : 10})
            .expect("Content-type",/json/)
            .expect(200)
            .end(function(err,res){
                res.text.should.equal('-10');
                done();
            });
    });

});