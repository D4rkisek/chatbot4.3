from flask import Flask, render_template, request, redirect
import openai
import os
import time
from openai import OpenAI
import logging

# Set the OpenAI API key
client = OpenAI(
    api_key="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",
)

MODEL = "gpt-4-1106-preview"

filepath = "./hastin_direct_data.txt"

file_object = client.files.create(file=open(filepath, "rb"),
                                   purpose="assistants")


assis_id="asst_8xcCQBr7VW6I9QEXV4szLSOR"
thread_id="thread_SHmziGMx1E3wA7Qj3uhSFQ61"

message = "Why should I use Hastings Direct as my insurance company?"
message = client.beta.threads.messages.create(
    thread_id=thread_id,
    role="user",
    content=message
)

run = client.beta.threads.runs.create(
    thread_id=thread_id,
    assistant_id=assis_id,
    instructions="Please address the user as Bruce",
)

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
                elapsed_time = run.completed_at - run.created_at
                formatted_elapsed_time = time.strftime(
                    "%H:%M:%S", time.gmtime(elapsed_time)
                )
                print(f"Run completed in {formatted_elapsed_time}")
                logging.info(f"Run completed in {formatted_elapsed_time}")
                # Get messages here once Run is completed!
                messages = client.beta.threads.messages.list(thread_id=thread_id)
                last_message = messages.data[0]
                response = last_message.content[0].text.value
                print(f"Assistant Response: {response}")
                break
        except Exception as e:
            logging.error(f"An error occurred while retrieving the run: {e}")
            break
        logging.info("Waiting for run to complete...")
        time.sleep(sleep_interval)

wait_for_run_completion(client=client, thread_id=thread_id, run_id=run.id)

# === Check the Run Steps - LOGS ===
run_steps = client.beta.threads.runs.steps.list(thread_id=thread_id, run_id=run.id)
print(f"Run Steps --> {run_steps.data[0]}")



