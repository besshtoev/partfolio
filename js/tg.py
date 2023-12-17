import telebot
bot=telebot.TeleBot('6717854544:AAFPHVx-HO3THJtnoJRwX8vblGYvbYDMErk')
@bot.message_handler(commands=['start'])
def start(message):
    bot.send_message(message.chat.id,'Ассаламу Алейкум ')

@bot.message_handler(commands=['id'])
def start(message):
    bot.send_message(message.chat.id,message.chat.id)


bot.polling(none_stop=True)