from hcsr04 import HCSR04
from time import sleep

def main():	

    sensor = HCSR04(trigger_pin=5, echo_pin=18, echo_timeout_us=10000)

    while True:
        distance = sensor.distance_cm()
        print('Distance:', distance, 'cm')
        sleep(1)
    
    
if __name__ == "__main__":
    main()
    
    

