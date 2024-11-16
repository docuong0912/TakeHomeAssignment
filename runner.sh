if [ $# -lt 2 ]; then
    echo "Usage: $0 <hotel_ids> <destination_ids>"
    exit 1
fi

HOTEL_IDS=$1
DESTINATION_IDS=$2

# Run the Node.js script with arguments
node ./index.js "$HOTEL_IDS" "$DESTINATION_IDS"