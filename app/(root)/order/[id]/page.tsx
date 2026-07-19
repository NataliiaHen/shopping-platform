import { getOrderById } from '@/lib/actions/order.actions';
import { notFound } from 'next/navigation';
import { Order, ShippingAddress } from '@/types';
import { Metadata } from 'next';
import OrderDetailsTable from './order-details-table';
import { auth } from '@/auth';

export const metadata: Metadata = {
  title: 'Order Details',
};

const OrderDetailsPage = async (props: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const session = await auth();
  const params = await props.params;

  const { id } = params;

  const order = await getOrderById(id);
  if (!order) notFound();

  return (
    <OrderDetailsTable
      order={
        {
          ...order,
          shippingAddress: order.shippingAddress as ShippingAddress,
        } as unknown as Order
      }
      isAdmin={session?.user.role === 'admin' || false}
    />
  );
};

export default OrderDetailsPage;
