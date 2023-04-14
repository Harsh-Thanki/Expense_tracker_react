from tornado.web import Application, RequestHandler
from tornado.ioloop import IOLoop

expenses = []


class Expenses(RequestHandler):
    def get(self):
        self.write({'expenses': expenses})


def make_app():
    urls = [("/", Expenses)]
    return Application(urls, debug=True)


if __name__ == '__main__':
    app = make_app()
    app.listen(3010)
    IOLoop.instance().start()
