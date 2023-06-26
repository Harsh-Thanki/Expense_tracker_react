import json

from tornado.web import Application, RequestHandler
from tornado.ioloop import IOLoop

expenses = []


class Expenses(RequestHandler):
    def get(self):
        self.write({'expenses': expenses})


class Expense(RequestHandler):
    def post(self):
        expenses.append(json.loads(self.request.body))
        self.write({'message': json.loads(self.request.body)})


def make_app():
    urls = [("/", Expenses),
            ("/add/expense/", Expense)
            ]
    return Application(urls, debug=True)


if __name__ == '__main__':
    app = make_app()
    app.listen(3010)
    IOLoop.instance().start()
