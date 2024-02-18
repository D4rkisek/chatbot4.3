from flask import Flask, render_template, request, redirect
import openai
import os
import time
from openai import OpenAI
import logging
import threading
from flask import jsonify
import pygame
import random
import sys

# Set the OpenAI API key
client = OpenAI(
    api_key="key",
)

MODEL = "gpt-4-1106-preview"

filepath = "./hastings_direct_data.txt"

file_object = client.files.create(file=open(filepath, "rb"),
                                   purpose="assistants")


def wait_for_run_completion(client, thread_id, run_id, sleep_interval=20):
    """
    Waits for a run to complete and prints the elapsed time.:param client: The OpenAI client object.
    :param thread_id: The ID of the thread.
    :param run_id: The ID of the run.
    :param sleep_interval: Time in seconds to wait between checks.
    """
    while True:
        try:
            run = client.beta.threads.runs.retrieve(thread_id=thread_id, run_id=run_id)
            if run.completed_at:
                # Get messages here once Run is completed!
                messages = client.beta.threads.messages.list(thread_id=thread_id)
                last_message = messages.data[0]
                response = last_message.content[0].text.value
                return response
        except Exception as e:
            logging.error(f"An error occurred while retrieving the run: {e}")
            return None
        logging.info("Waiting for run to complete...")
        time.sleep(sleep_interval)

# === Check the Run Steps - LOGS ===
#run_steps = client.beta.threads.runs.steps.list(thread_id=thread_id, run_id=run.id)
#print(f"Run Steps --> {run_steps.data[0]}")

# Create a Flask web application
app = Flask(__name__)


# if chosen 1:
#   change values of  thread_id=thread.id,
#                      && assistant_id=assistant.id
# else:
#   change values of  thread_id=thread.id,
#                      && assistant_id=assistant.id
#
# just name them differently

def process_user_text(user_text):
    # Placeholder response - replace with actual processing logic
    return "You said: " + user_text

# Define app routes
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/get")
def get_bots_response():

    userText = request.args.get('msg')

    # Select the tailored model
    assis_id="asst_8xcCQBr7VW6I9QEXV4szLSOR"
    thread_id="thread_SHmziGMx1E3wA7Qj3uhSFQ61"
    message = userText
    message = client.beta.threads.messages.create(
        thread_id=thread_id,
        role="user",
        content=message
    )

    run = client.beta.threads.runs.create(
        thread_id=thread_id,
        assistant_id=assis_id,
    )

    response = wait_for_run_completion(client=client, thread_id=thread_id, run_id=run.id)
    print(userText)
    return str(response)

@app.route('/refresh')
def refresh():
    time.sleep(600)  # Wait for 10 minutes
    return redirect('/refresh')

@app.route('/run-python-script', methods=['POST'])
def run_python_script():
    import subprocess
    subprocess.Popen([sys.executable, r'C:\Users\maruf\web-chatbot\chatbot_cargame.py'])
    return jsonify({"message": "Python script is running in the background"}), 200

# Run the Flask app
if __name__ == "__main__":
    app.run(debug=True)  # Enable debug for development phase

